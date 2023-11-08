<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>

	<h3>게시글 등록화면</h3>
	<form action="addBoard.do" method="post" enctype="multipart/form-data">
		<table class="table">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" class="form-control"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text" name="writer"class="form-control" readonly value="${logId }"></td>
			</tr>
			<tr>
				<td colspan="2"><textarea cols="40" rows="6" name="content" class="form-control"></textarea></td>
			</tr>
			<tr>
				<th>파일명</th>
				<td><input type="file" name="img" class="form-control"></td>
			</tr>
			<tr>
				<td colspan="2">
				<input type="submit" value="저장" class="btn btn-primary">
				<input type="reset" value="초기화" class="btn btn-warning">
				</td>
			</tr>
		</table>
	</form>

<jsp:include page="../layout/footer.jsp"></jsp:include>