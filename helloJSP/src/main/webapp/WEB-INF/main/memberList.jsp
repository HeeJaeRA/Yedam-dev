<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>

<h3>유저 목록</h3>
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
		<c:forEach items="${memlist }" var="member">
			<tr>
				<td>${member.mid }</td>
				<td>${member.pass }</td>
				<td>${member.name }</td>
				<td>${member.phone }</td>
				<td>${member.responsibility }</td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<jsp:include page="../layout/footer.jsp"></jsp:include>