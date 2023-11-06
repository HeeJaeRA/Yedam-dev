<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>getBoard.jsp</title>
</head>

<body>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>
	<form action="modifyForm.do" name="myFrm">
	<h3>상세 화면</h3>
		<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
		<table border="1">
			<tr>
				<th>글 번호</th>
				<td><%=vo.getBoardNo()%></td>
				<th>작성일자</th>
				<td><%=vo.getWriteDate()%></td>
			</tr>
			<tr>
				<th>제목</th>
				<td colspan="3"><%=vo.getTitle()%></td>
			</tr>
			<tr>
				<td colspan="4"><textarea rows="5" cols="40"><%=vo.getContent()%></textarea></td>
			</tr>
			<tr>
				<th>이미지</th>
				<td colspan="3"><img src="images/<%=vo.getImage()%>" width="100px" style="display: block; margin: 0px auto;"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><%=vo.getWriter()%></td>
				<th>조회수</th>
				<td><%=vo.getViewCnt()%></td>
			</tr>
			<tr>
				<td colspan="4" align="center">
					<input type="submit" value="수정"> 
					<input type="button" value="삭제" onclick="location.href='removeBoard.do?bno=<%=vo.getBoardNo()%>'">
				</td>
			</tr>
		</table>
	</form>
	<p><a href="boardList.do">목록으로</a></p>
</body>

</html>