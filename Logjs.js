window.onload = function () {
            var usernameElt = document.getElementById("username");
            var usernameErrorSpan = document.getElementById("usernameError");
            usernameElt.onblur = function () {
                var username = usernameElt.value;//属性不是方法value后面没有括号！！！！！！！
                username = username.trim();

                if (username ===""){
                    usernameErrorSpan.innerText = "用户名不能为空";
                }else {
                    if (username.length < 6 || username.length > 14){
                        usernameErrorSpan.innerText = "用户名长度必须在6至14之间";
                    }else{
                        var regExp = /^[A-Za-z0-9]+$/
                        var ok = regExp.test(username);
                        if (ok){

                        }else{
                            usernameErrorSpan.innerText = "用户名只能用数字和字母组成"
                        }
                    }
                }
            }
            usernameElt.onfocus = function () {
                usernameErrorSpan.innerText = "";
            }
            var pwdErrorSpan = document.getElementById("pwdError");
            var userpwd2Elt = document.getElementById("userpwd2");
            var userpwdElt = document.getElementById("userpwd");
            userpwd2Elt.onblur = function () {

                var userpwd = userpwdElt.value;
                var userpwd2 = userpwd2Elt.value;
                if(userpwd != userpwd2){
                    //密码一致
                    pwdErrorSpan.innerText = "密码不一致";
                }else{
                    //密码一致
                }

            }
            userpwd2Elt.onfocus = function () {
                if(pwdErrorSpan.innerText !=""){
                    userpwd2Elt.value = "";
                }
                pwdErrorSpan.innerText = "";
            }

            var emailElt = document.getElementById("email");
            var emailErrorspan = document.getElementById("emailError");
            emailElt.onblur = function () {
                var email = emailElt.value;
                var emailReExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                var ok = emailReExp.test(email);
                if(ok){

                }else {
                    emailErrorspan.innerText = "邮箱地址不合法";
                }
            }
			emailElt.onfocus = function(){
				if(emailErrorspan != ""){
					emailErrorspan.innerText = "";
				}
			}
            var submitBtnElt = document.getElementById("submitBtn");
            submitBtnElt.onclick = function () {
                usernameElt.focus();
                usernameElt.blur();

                userpwd2Elt.focus();
                userpwd2Elt.blur();

                emailElt.focus();
                emailElt.blur();

                if(usernameErrorSpan.innerText =="" && pwdErrorSpan.innerText=="" && emailErrorspan.innerText==""){
                    var userFormElt = document.getElementById("userForm");
                    userFormElt.submit();
                }
            }
        }