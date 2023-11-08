<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>

	<h3>게시글 수정화면</h3>
	<form action="modifyBoard.do" method="post">
		<input type="hidden" name="bno" value="${vo.boardNo}" class="form-control">
		<table class="table">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" value="${vo.title}" class="form-control"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text" name="writer" value="${vo.writer}" class="form-control" readonly></td>
			</tr>
			<tr>
				<td colspan="2"><textarea cols="40" rows="6" name="content" class="form-control">${vo.content}</textarea></td>
			</tr>
			<tr>
				<th>이미지</th>
				<c:choose>
					<c:when test="${empty vo.image}">
						<td colspan="3"></td>
					</c:when>
					<c:otherwise>
						<td colspan="3"><img src="images/${vo.image}" width="100px" style="display: block; margin: 0px auto;"></td>				
					</c:otherwise>
				</c:choose>
			</tr>
			<tr>
				<td colspan="2">
				<input type="submit" value="수정" class="btn btn-primary">
				<input type="reset" value="초기화" class="btn btn-warning">
				</td>
			</tr>
		</table>
	</form>

<jsp:include page="../layout/footer.jsp"></jsp:include>