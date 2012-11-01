//check the store for logged in or not
function checkLoginStore(){
	if(localStorage.getItem('member.kt') && localStorage.getItem('member.union_name')){
		return true;
	}else{
		return false;
	}
}

//when log in , set the store
function setLoginStore(data){
	for(var i in data){
        localStorage.setItem('member.'+i,data[i]);
        //console.log(localStorage.getItem('member.'+i,obj[i]));
      }
    localStorage.setItem('member.union_name','work');
}