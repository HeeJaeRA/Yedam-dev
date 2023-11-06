<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>

<%
	BoardVO vo = (BoardVO) request.getAttribute("vo");
%>
	<h3>게시글 수정화면</h3>
	<form action="modifyBoard.do" method="post">
		<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
		<table border="1">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" value="<%=vo.getTitle()%>"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text" name="writer" value="<%=vo.getWriter()%>"></td>
			</tr>
			<tr>
				<td colspan="2"><textarea cols="40" rows="6" name="content"><%=vo.getContent()%></textarea></td>
			</tr>
			<tr>
				<th>이미지</th>
				<td><img src="images/<%=vo.getImage()%>" width="100px" style="display: block; margin: 0px auto;"></td>
			</tr>
			<tr>
				<td colspan="2">
				<input type="submit" value="수정">
				<input type="reset" value="초기화">
				</td>
			</tr>
		</table>
	</form>

<%@include file="../layout/footer.jsp"%>