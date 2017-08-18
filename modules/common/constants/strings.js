(function(){
  angular.module('common.constants')
  .constant("STRINGS",{
    INVALID_LOGIN_DETAILS:'Invalid ID & Password',
    MISSING_REQUIRED_FIELDS:'Some required fields are missing',
    INVALID_EMAIL_ADDRESS:'Invalid Email address',
    EMAIL_ALREADY_EXISTS:'This email address already exists',
    INTERNAL_SERVER_ERROR:'Internal server error',
    MOVIE_ALREADY_EXISTS:'Movie with same name already exists',
    MOVIE_ADD_SUCCESS:'Movie added successfully',
    MOVIE_EDIT_SUCCESS:'Movie edited successfully',
    MOVIE_NOT_FOUND:"Movie not found!",
    MOVIE_DELETE_SUCCESS:"Movie deleted successfully!",
    MOVIE_RATE_SUCCESSFULL:"Rating was successful",

    PUSH_MOVIE_EDITED: ' has EDITED ',
    PUSH_MOVIE_RATED: ' has RATED ',
    PUSH_MOVIE_ADDED: ' has ADDED ',
    PUSH_MOVIE_DELETED: ' has DELETED ',
  })
})();

