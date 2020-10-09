define(function(require,exports,module){
     var $ = require('jquery');//引入jquery
     require('boot')($);
     require('jstorage')($);//共享给jquery


     $.jStorage.set("theme", "年轻人请乘风破浪");
     $.jStorage.set("square_name", "XX学院代表队");
     $.jStorage.set("square_image", " ");
     $.jStorage.set("opposition_name", "XX学院代表队");
     $.jStorage.set("opposition_image", " ");
     $.jStorage.set("test", [{name:"heheh"},{name:"husaiu"}]);
     var index = $.jStorage.index();
    console.log(index); // ["key1","key2","key3"]
    var test = $.jStorage.get("test");
    console.log(test);
    console.log(test.length);
    $.jStorage.flush();
});
