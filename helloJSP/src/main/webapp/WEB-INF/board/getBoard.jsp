<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<style>
	ul> li {
		list-style: none;
	}
	#list span {
		margin: 10px;
	}

</style>
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>

<%
BoardVO vo = (BoardVO) request.getAttribute("bno");
%>

<form action="modifyForm.do" name="myFrm">
	<h3>상세 화면</h3>
	<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>"
		class="form-control">
	<table class="table">
		<tr>
			<th>글 번호</th>
			<td class="boardNo"><%=vo.getBoardNo()%></td>
			<th>작성일자</th>
			<td><%=vo.getWriteDate()%></td>
		</tr>
		<tr>
			<th>제목</th>
			<td colspan="3"><%=vo.getTitle()%></td>
		</tr>
		<tr>
			<td colspan="4"><textarea rows="5" cols="40" class="form-control"><%=vo.getContent()%></textarea></td>
		</tr>
		<tr>
			<th>이미지</th>
			<% if (vo.getImage() == null) { %>
			<td colspan="3"></td>
			<% } else { %>
			<td colspan="3"><img src="images/<%=vo.getImage()%>" width="100px" style="display: block; margin: 0px auto;"></td>
			<% } %>
		</tr>
		<tr>
			<th>작성자</th>
			<td><%=vo.getWriter()%></td>
			<th>조회수</th>
			<td><%=vo.getViewCnt()%></td>
		</tr>
		<tr>
			<td colspan="4" align="center">
				<% if (logId != null && logId.equals(vo.getWriter())) { %> 
				<input type="submit" value="수정" class="btn btn-primary"> 
				<input type="button" value="삭제" onclick="location.href='removeBoard.do?bno=<%=vo.getBoardNo()%>'" class="btn btn-warning"> 
				<% } else { %> 
				<input type="submit" value="수정" disabled> <input type="button" value="삭제" disabled> 
				<% } %>
			</td>
		</tr>
	</table>
</form>

<h3>댓글 등록</h3>
<table class="replyTable">
	<tr>
		<th>댓글 내용</th>
		<td><input type="text" id="replyContent"></td>
		<td><button id="addReply">댓글 등록</button></td>
	</tr>

</table>

<h3>댓글 목록</h3>
<ul id="list">
	<li id="template" style="display: none;"><span>댓글 번호</span><span><b>댓글 내용</b></span><span>작성자</span><span>작성일</span><button>삭제</button></li>
</ul>

<script>
	let bno = document.querySelector('.boardNo').innerHTML;
	let writer = "<%=logId%>";
	fetch('replyList.do?bno=' + bno)
	.then(resolve => resolve.json())
	.then(result => {
		result.forEach(reply => {
			let li = makeRow(reply);
			document.querySelector('#list').append(li);
		});
	})
	.catch(err => console.log('err: ', err));

	function makeRow(reply) {
		let temp = document.querySelector('#template').cloneNode(true);
		temp.style.display = 'block';
		temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
		temp.querySelector('b').innerHTML = reply.reply;
		temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
		temp.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;

		return temp;
	}

	document.querySelector('#addReply').addEventListener('click', function(e) {
		let reply = document.querySelector('#replyContent').value;
		
		fetch('addReply.do', {
			method: 'post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: 'bno=' + bno + '&reply=' + reply + '&replyer=' + writer
		})
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {
				document.querySelector('#list').append(makeRow(result.vo));
			} else {
				alert('등록 실패');
			}
		})
	})
</script>

<p>
	<a href="boardList.do">목록으로</a>
</p>

<%@include file="../layout/footer.jsp"%>