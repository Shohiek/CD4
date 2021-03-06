<script>
	$().ready(function() {
      equipment_pie();
      equipment_tests_pie();
      equipment_tests_column();
      tests_line_trend();
      expected_reporting_devices();
      tests_pie();
});

	function draw_charts(user_group_id,user_filter_used){


		$.ajax({
          type:"POST",
          async:false,          

            url:"<?php echo base_url()."charts/equipment/equipment_pie/"; ?>"+user_group_id+"/"+user_filter_used,             
            success:function(data) {
                  $("#equipmentpiescript").html(data); 
                  equipment_pie();    
              }
      });


      $.ajax({
          type:"POST",
          async:false,
            url:"<?php echo base_url()."charts/equipment/equipment_table/"; ?>"+user_group_id+"/"+user_filter_used,  
            success:function(data) {
                  $("#equipment-table").html(data);     
              }
      }); 

      $.ajax({
          type:"POST",
          async:false,
            url:"<?php echo base_url()."charts/tests/tests_table/"; ?>"+user_group_id+"/"+user_filter_used,  
            success:function(data) {
                  $("#tests-table").html(data);     
              }
      });
      $.ajax({
          type:"POST",
          async:false,
            url:"<?php echo base_url()."charts/tests/tests_pie/"; ?>"+user_group_id+"/"+user_filter_used,  
            success:function(data) {
                  $("#testspiescript").html(data); 
                  tests_pie();    
              }
      });


      $.ajax({
          type:"POST",
          async:false,
            url:"<?php echo base_url()."charts/equipment/equipment_tests_table/"; ?>"+user_group_id+"/"+user_filter_used,  
            success:function(data) {
                  $("#equipment-tests-table").html(data);     
              }
      });

      $.ajax({
          type:"POST",
          async:false,
            url:"<?php echo base_url()."charts/equipment/equipment_tests_pie/"; ?>"+user_group_id+"/"+user_filter_used,  
            success:function(data) {
                  $("#equipmenttestspiescript").html(data); 
                  equipment_tests_pie();    
              }
      });
      $.ajax({
          type:"POST",
          async:false,
            url:"<?php echo base_url()."charts/equipment/equipment_tests_column/"; ?>"+user_group_id+"/"+user_filter_used,  
            success:function(data) {
                  $("#equipmenttestscolumnscript").html(data);  
                  equipment_tests_column();   
              }
      });
      $.ajax({
          type:"POST",
          async:false,
            url:"<?php echo base_url()."charts/tests/tests_line_trend/"; ?>"+user_group_id+"/"+user_filter_used,  
            success:function(data) {
                  $("#testslinetrendscript").html(data);  
                  tests_line_trend();
              }
      });



      $.ajax({
          type:"POST",
          async:false,
            url:"<?php echo base_url()."ajax/user_desc/"; ?>"+user_group_id+"/"+user_filter_used,  
            success:function(data) {
                  $("#filter-identifier").html(data);     
              }
      });
	}
</script>

<?php $this->equipment->equipment_pie(0,0); ?>

<?php $this->equipment->equipment_tests_pie(0,0); ?>

<?php $this->tests->tests_pie(0,0); ?>

<?php $this->equipment->equipment_tests_column(0,0); ?>

<?php $this->tests->tests_line_trend(0,0); ?>

<?php $this->pima->expected_reporting_devices(0,0); ?>