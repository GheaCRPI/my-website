
<?php
  include('includes/init.inc.php'); // include the DOCTYPE and opening tags
  include('includes/functions.inc.php'); // functions
  ini_set('display_errors', 1);
  error_reporting(E_ALL);
?>
<title>PHP &amp; MySQL - ITWS</title>

<?php
  include('includes/head.inc.php');
  // include global css, javascript, end the head and open the body
?>

<h1>PHP &amp; MySQL</h1>

<?php include('includes/menubody.inc.php'); ?>

<?php

  $dbOk = false;
  @ $db = new mysqli('localhost', 'root','blob', 'iit');
  if ($db->connect_error) {
    echo '<div class="messages">Could not connect to the database. Error: ';
    echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
  } else {
    $dbOk = true;
  }
  $havePost = isset($_POST["saveMovies"]);
  $errors = '';
  if ($havePost) {
    $title = htmlspecialchars(trim($_POST["title"]));
    $year = htmlspecialchars(trim($_POST["year"]));
    $focusId = ''; // trap the first field that needs updating, better would be to save errors in an array

    if ($title == '') {
      $errors .= '<li>Title may not be blank</li>';
      if ($focusId == '') $focusId = '#title';
    }
    if ($year == '') {
      $errors .= '<li>year may not be blank</li>';
      if ($focusId == '') $focusId = '#year';
    }

    if ($errors != '') {
      echo '<div class="messages"><h4>Please correct the following errors:</h4><ul>';
      echo $errors;
      echo '</ul></div>';
      echo '<script type="text/javascript">';
      echo '  $(document).ready(function() {';
      echo '    $("' . $focusId . '").focus();';
      echo '  });';
      echo '</script>';
    } else {
      if ($dbOk) {
        $titleForDb = trim($_POST["title"]);
        $yearForDb = trim($_POST["year"]);

        $insQuery = "insert into movies (`title`,`year`) values(?,?)";
        $statement = $db->prepare($insQuery);
        $statement->bind_param("ss",$titleForDb,$yearForDb);
        $statement->execute();

        // give the user some feedback
        echo '<div class="messages"><h4>Success: ' . $statement->affected_rows . ' movie added to database.</h4>';
        echo $title . ' made in: ' . $year .  '</div>';

        // close the prepared statement obj
        $statement->close();
      }
    }
  }
?>

<h3>Add Movie</h3>
<form id="addForm" name="addForm" action="movies.php" method="post" onsubmit="return validate(this);">
  <fieldset>
    <div class="formData">

      <label class="field" for="title">Movie Title:</label>
      <div class="value"><input type="text" size="60" value="<?php if($havePost && $errors != '') { echo $title; } ?>" name="title" id="title"/></div>

      <label class="field" for="year">Year:</label>
      <div class="value"><input type="text" size="60" value="<?php if($havePost && $errors != '') { echo $year; } ?>" name="year" id="year"/></div>
      <input type="submit" value="save" id="saveMovies" name="saveMovies"/>
    </div>
  </fieldset>
</form>


<h3>Movies</h3>
<table id="movieTable">
<?php
  if ($dbOk) {

    $query = 'select * from movies order by title';
    $result = $db->query($query);
    $numRecords = $result->num_rows;

    echo '<tr><th>Title:</th><th>Year crreated:</th><th></th></tr>';
    for ($i=0; $i < $numRecords; $i++) {
      $record = $result->fetch_assoc();
      if ($i % 2 == 0) {
        echo "\n".'<tr id="movie-' . $record['movieid'] . '"><td>';
      } else {
        echo "\n".'<tr class="odd" id="movie-' . $record['movieid'] . '"><td>';
      }
      echo htmlspecialchars($record['title']);
      echo '</td><td>';
      echo htmlspecialchars($record['year']);
      echo '</td><td>';
      echo '<img src="resources/delete.png" class="deleteMovie" width="16" height="16" alt="delete movie"/>';
      echo '</td></tr>';

    }

    $result->free();

    // Finally, let's close the database
    $db->close();
  }

?>
</table>
