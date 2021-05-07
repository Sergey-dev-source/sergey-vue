<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');
Route::get('open', 'DataController@open');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::get('closed', 'DataController@closed');
});

Route::post('/search','SearchController@search');
Route::get('/us/{id}','SearchController@user');
Route::get('/contact/{id}','ChatsController@getContacts');
Route::get('/message/{from}/{to}','MessageController@getMessage');
Route::post('/send','MessageController@sendMessage');
