<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
    fetch('drawChart.do')
      .then(resolve => {
    	  return resolve.json();
      })
      .then(result => {
    	  let arrayData = [];
    	  arrayData.push(['Member','replyCountByMember']);
    	  
    	  result.vo.forEach((obj) => {
    		  arrayData.push([obj.replyer, obj.replyCnt]);  
    	  })
      	  
      	  console.log(arrayData);
    	  google.charts.load("current", {packages:["corechart"]});
          google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
          	var data = google.visualization.arrayToDataTable(arrayData);
          	var options = {
              	title: '회원별 댓글 비율',
              	is3D: true,
          	};
          	var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
			chart.draw(data, options);
		  }
      })
</script>
<div id="piechart_3d" style="width: 900px; height: 500px;"></div>

<jsp:include page="../layout/footer.jsp"></jsp:include>