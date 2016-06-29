import RootComponent from './components/RootComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery"

$.ajaxSetup({
    statusCode: {
        401: function(){
            router.transitionTo('login');
        },
        403: function() {
            router.transitionTo('notAllowed');
        },
        200: function(){
          alert("helloi");
        }
    }
});

ReactDOM.render(
    <RootComponent/>,
    document.querySelector('.root')
);
