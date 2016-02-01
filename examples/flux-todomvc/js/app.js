/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

// Define component classes
var TodoApp = require('./components/TodoApp.react');
var MyInfoApp = require('./components/MyInfo.react');

// Render
React.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
React.render(
  <MyInfoApp />,
  document.getElementById('myinfo')
);
