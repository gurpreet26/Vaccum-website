$(document).ready(function() {
	$("#fname").focus();
	$.validator.addMethod("validEmail",
    function(value, element) {
        return value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,6}$/);
    },
    "Please Enter proper Email"
);
	
	$("#form").validate({
        rules:{
            firstname:{
                required: true,    
			},
			lastname:{
				required:true,
			},
		
			'radio[]':{ required:true },
			email:{
				required:true,
				email:true,
				
			},
			phno:{
				required:true,
				phoneUS: true,	
			},
			
			query:{
				required:true,
			
			},
			'check[]':{
				required:true,
				maxlength: 2,
			},
		},
		messages:{
            firstname:{
                required: "First Name Missing",    
			},
			lastname:{
				required: "Last Name Missing",
			},
		
			phno:{
				required:"Enter cell number",
				phoneUS: "Enter in format 000-000-0000",	
			},
			email:{
				required: "Valid Email Missing",
			},
			
			query:{
				required: "Enter Your Query!",
				
			},
			check:{
				required: "Please check the box",
			},
		},
		submitHandler: function(form){
            form.submit();
        }

    })		

});	