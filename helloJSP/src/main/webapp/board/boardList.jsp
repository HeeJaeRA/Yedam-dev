<%@page import="co.yedam.board.service.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>게시판 목록</title>
</head>

<body>
	<h3>게시판 목록</h3>
	<%
		List<BoardVO> list = (List<BoardVO>) request.getAttribute("list"); 
	%>
	<table border = "1">
	<tbody>
	<tr>
	<td></td></tr>
	</tbody>
	</table>
</body>

</html>