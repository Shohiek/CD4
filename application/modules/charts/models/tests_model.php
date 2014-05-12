<?php
class tests_model extends MY_Model{
	public function tests_pie($from,$to,$user_group_id,$user_filter_used){

		$user_delimiter =$this->sql_user_delimiter($user_group_id,$user_filter_used);

		$sql 	= 	"SELECT 
							COUNT(*) AS `total`,
							SUM(CASE WHEN `patient_age_group_id`='3' AND `valid`= '1' AND `cd4_count` < 350 THEN 1 ELSE 0 END ) AS `failed`,
							SUM(CASE WHEN `patient_age_group_id`='3' AND `valid`= '1' AND `cd4_count` >= 350 THEN 1 ELSE 0 END ) AS `passed`,
							SUM(CASE WHEN `valid`= '0'    THEN 1 ELSE 0 END) AS `errors`,	
							SUM(CASE WHEN `valid`= '1'    THEN 1 ELSE 0 END) AS `valid`				
						FROM `v_tests_details`

						WHERE `result_date` BETWEEN '$from' AND '$to'
						$user_delimiter

					";
		$tst 	=	R::getAll($sql);

		$tst[0]["title"]= 'Tests';

		$failed =	(int) $tst[0]["failed"];
		$passed =	(int) $tst[0]["passed"];
		$total =	(int) $tst[0]["total"];
		$errors =	(int) $tst[0]["errors"];
		$valid =	(int) $tst[0]["valid"];


		$tests 	=				array(
									0	=>	array(
													'y'				=>	$valid,
													'color'			=>	'#a4d53a',
													'drilldown'		=>	array(
																			'name'			=>	'Successful Tests',
																			'color'			=>	'#a4d53a',
																			'categories'	=>	array(
																										0	=>	'abv critical lvl',
																										1	=>	'blw critical lvl',
																								),
																			'data'			=>	array(
																										0	=>	$failed,
																										1	=>	$passed
																								)
																		)
												),
									1	=>	array(
													'y'				=>	$errors,
													'color'			=>	'#aa1919',
													'drilldown'		=>	array(
																			'name'			=>	'Unsuccessful Tests (Errors)',
																			'color'			=>	'#aa1919',
																			'categories'	=>	array(
																										0	=>	'Errors'
																								),
																			'data'			=>	array(
																										0	=>	$errors
																								)
																		)
												)
								);
		$categories		=		array('Successful Tests','Unsuccessful Tests (Errors)');

		$data["tests"]		=	$tests;
		$data["categories"]	=	$categories;

		return $data;
	}

	public function tests_table($from,$to,$user_group_id,$user_filter_used){

		$user_delimiter =$this->sql_user_delimiter($user_group_id,$user_filter_used);

		$sql 	= 	"SELECT 
							
							COUNT(*) AS `total`,
							SUM(CASE WHEN `patient_age_group_id`='3' AND `valid`= '1' AND `cd4_count` < 350 THEN 1 ELSE 0 END ) AS `failed`,
							SUM(CASE WHEN `patient_age_group_id`='3' AND `valid`= '1' AND`cd4_count` >= 350 THEN 1 ELSE 0 END ) AS `passed`,
							SUM(CASE WHEN `valid`= '0'    THEN 1 ELSE 0 END) AS `errors`,	
							SUM(CASE WHEN `valid`= '1'    THEN 1 ELSE 0 END) AS `valid`				
						FROM `v_tests_details`

						WHERE `result_date` BETWEEN '$from' AND '$to'
						$user_delimiter

					";
		$tests 	=	R::getAll($sql);

		$tests[0]["title"]= 'Tests';

		$failed =	$tests[0]["failed"];
		$passed =	$tests[0]["passed"];
		$total =	$tests[0]["total"];
		$errors =	$tests[0]["errors"];
		$valid =	$tests[0]["valid"];

		if($total>0){

			$row["title"]	= 'Percentages';
			$row["total"]	= null;
			$row["passed"]	= round(($passed/$total)*100,2)."%";
			$row["failed"]	= round(($failed/$total)*100,2)."%";	
			$row["errors"]	= round(($errors/$total)*100,2)."%";	
			$row["valid"]	= round(($valid/$total)*100,2)."%";	
		}else{
			$row["title"]	= 'Percentages';
			$row["total"]	= null;
			$row["passed"]	= "0 %";
			$row["failed"]	= "0 %";	
			$row["errors"]	= "0 %";	
			$row["valid"]	= "0 %";
		}

		$tests[1]	=	$row;

		return $tests;
	}

	public function tests_line_trend($user_group_id,$user_filter_used){

		$today		=	Date("Y-m-d");
		$this_year 	= 	(int)	Date("Y");
		$beg_year	=	$this_year - 4;

		$from		=	Date("$beg_year-1-1");
		$to			=	$today;

		$user_delimiter =$this->sql_user_delimiter($user_group_id,$user_filter_used);

		$sql 	= 	"SELECT 
							COUNT(*) AS `total`,
							MONTH(`result_date`) AS `month`,
							YEAR(`result_date`) AS `year`,
							CONCAT(YEAR(`result_date`),'-',MONTH(`result_date`)) AS `yearmonth`,	
							SUM(CASE WHEN `patient_age_group_id`='3' AND `valid`= '1' AND `cd4_count` < 350 THEN 1 ELSE 0 END ) AS `failed`,
							SUM(CASE WHEN `patient_age_group_id`='3' AND `valid`= '1' AND `cd4_count` >= 350 THEN 1 ELSE 0 END ) AS `passed`,
							SUM(CASE WHEN `valid`= '0'    THEN 1 ELSE 0 END) AS `errors`,	
							SUM(CASE WHEN `valid`= '1'    THEN 1 ELSE 0 END) AS `valid`				
						FROM `v_tests_details`

						WHERE `result_date` BETWEEN '$from' AND '$to'
						$user_delimiter

						GROUP BY 	`yearmonth`
						ORDER BY 	`result_date` DESC	
					";


		$tests 	=	R::getAll($sql);

		$categories 	=	$this->get_yearmonth_categories($from,$to);

		$bel 	=	array();
		$abv 	=	array();

		foreach ($categories as $key => $value) {
			$bel[$key] 	=	0;
			$abv[$key] 	=	0; 				
		}

		foreach ($categories as $key => $value) {
			foreach ($tests as $row) {
				if($value==$row["yearmonth"]){
					$bel[$key] 	=	(int) $row["failed"];
					$abv[$key] 	=	(int) $row["passed"];
 				}
			}
		}

		$series_data	=	array(
								0	=>	array(
											"name"	=>	"Above critical level",
											"data"	=>	$abv
										),
								1 	=>	array(
											"name"	=>	"Below critical level",
											"data"	=>	$bel
										)
							);


		foreach ($categories as $key => $value) {
			$categories[$key] = Date("M,Y", strtotime("".$value.'-1'));
		}

		$data["categories"] 	= $categories;
		$data["series_data"] 	= $series_data;

		return $data;

	}
}