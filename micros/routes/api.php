<?php

use Dingo\Api\Routing\Router;

/** @var Router $api */
$api = app(Router::class);


$api->version('v1', function (Router $api) {
    $api->group(['prefix' => 'auth'], function(Router $api) {
        $api->post('signup', 'App\\Api\\V1\\Controllers\\SignUpController@signUp');
        $api->post('login', 'App\\Api\\V1\\Controllers\\LoginController@login');

        $api->post('recovery', 'App\\Api\\V1\\Controllers\\ForgotPasswordController@sendResetEmail');

        $api->post('sendinvite', 'App\\Api\\V1\\Controllers\\ResetPasswordController@sendEmail');
        $api->post('resetPassword', 'App\\Api\\V1\\Controllers\\ChangePasswordController@process');

        $api->post('logout', 'App\\Api\\V1\\Controllers\\LogoutController@logout');
        $api->post('refresh', 'App\\Api\\V1\\Controllers\\RefreshController@refresh');
        
    });




    $api->group(['middleware' => 'jwt.auth'], function(Router $api) {
        $api->get('costs', 'App\\Api\\V1\\Controllers\\CostsController@data');
        $api->post('insertcosts', 'App\\Api\\V1\\Controllers\\CostsController@insert');
        $api->get('bardashboard/{year}', 'App\\Api\\V1\\Controllers\\CostsController@bardashboard');
        $api->get('projetstats/{year}/{client}', 'App\\Api\\V1\\Controllers\\CostsController@projetstats');
        $api->get('piestats/{year}/{client}', 'App\\Api\\V1\\Controllers\\CostsController@piestats');
        $api->post('validate', 'App\\Api\\V1\\Controllers\\CostsController@va');
        $api->get('getcost/{id}', 'App\\Api\\V1\\Controllers\\CostsController@getone');
        
        //Group
        $api->get('Group', 'App\\Api\\V1\\Controllers\\GroupeController@data');
        $api->get('Group/{prefix}', 'App\\Api\\V1\\Controllers\\GroupeController@dataGrp');
        $api->get('Groupmembers/{grpid}', 'App\\Api\\V1\\Controllers\\GroupeController@dataGrpmembers');
        $api->get('Groupposts/{grpid}', 'App\\Api\\V1\\Controllers\\GroupeController@Grpposts');
        $api->get('username/{grpid}', 'App\\Api\\V1\\Controllers\\GroupeController@getusername');
        $api->Post('AddGroup', 'App\\Api\\V1\\Controllers\\GroupeController@insert');
        $api->Post('Addmember', 'App\\Api\\V1\\Controllers\\GroupeController@insertmember');
        $api->Post('deletemembergorup/{id}', 'App\\Api\\V1\\Controllers\\GroupeController@destorymember');
        $api->Post('AddPost', 'App\\Api\\V1\\Controllers\\GroupeController@insertpost');
        $api->Post('commenadd', 'App\\Api\\V1\\Controllers\\GroupeController@addcomment');
        //delete post and cmnt

        $api->Post('deletepost/{id}', 'App\\Api\\V1\\Controllers\\GroupeController@destroypost');
        $api->Post('deletecomnt/{id}', 'App\\Api\\V1\\Controllers\\GroupeController@destroycomments');

        
        
      
    });

   
    
    
    $api->group(['middleware' => 'jwt.auth'], function(Router $api) {

     

        $api->get('me', 'App\\Api\\V1\\Controllers\\UserController@me');
        $api->get('users', 'App\\Api\\V1\\Controllers\\UserController@userdata');
        $api->delete('user/{id}', 'App\\Api\\V1\\Controllers\\UserController@destroy');

        $api->get('protected', function() {
            return response()->json([
                'message' => 'Access to protected resources granted! You are seeing this text as you provided the token correctly.'
            ]);
        });

        $api->get('refresh', [
            'middleware' => 'jwt.refresh',
            function() {
                return response()->json([
                    'message' => 'By accessing this endpoint, you can refresh your access token at each request. Check out this response headers!'
                ]);
            }
        ]);
    });

  
    $api->get('hello', function() {
        
        return response()->json([
            'message' => 'This is a simple example of item returned by your APIs. Everyone can see it.'
        ]);
    });
});
