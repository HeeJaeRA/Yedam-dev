<%@page import="co.yedam.board.service.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>

<h3>유저 목록</h3>
<%
	List<MemberVO> list = (List<MemberVO>) request.getAttribute("memlist"); 
%>
<table class="table">
	<thead>
		<tr>
			<th>아이디</th>
			<th>비밀번호</th>
			<th>이름</th>
			<th>전화번호</th>
			<th>회원분류</th>
		</tr>
	</thead>
	<tbody>
		<% 
			for (MemberVO vo : list) {
		%>
		<tr>
			<td><%=vo.getId()%></td>
			<td><%=vo.getPw()%></td>
			<td><%=vo.getName()%></td>
			<td><%=vo.getPhone()%></td>			
			<td><%=vo.getRespon()%></td>			
		</tr>
		<% 
			}
		%>
	</tbody>
</table>
<%@include file="../layout/footer.jsp"%>