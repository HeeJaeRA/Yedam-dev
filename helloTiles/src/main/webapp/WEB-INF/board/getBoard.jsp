<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<style>
	ul> li {
		list-style: none;
	}
	#list span {
		margin: 10px;
	}
	.pagination {
	display: inline-block;
	}

	.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	}

	.pagination a.active {
	background-color: #4CAF50;
	color: white;
	}

	.pagination a:hover:not(.active) {background-color: #ddd;}
</style>

<form action="modifyForm.do" name="myFrm">
	<h3>상세 화면</h3>
	<input type="hidden" name="bno" value="${bno.boardNo}" class="form-control">
	<table class="table">
		<tr>
			<th>글 번호</th>
			<td class="boardNo">${bno.boardNo}</td>
			<th>작성일자</th>
			<td><fmt:formatDate value="${bno.writeDate}" pattern="yyyy-MM-dd HH:mm:ss"></fmt:formatDate></td>
		</tr>
		<tr>
			<th>제목</th>
			<td colspan="3">${bno.title}</td>
		</tr>
		<tr>
			<td colspan="4"><textarea rows="5" cols="40" class="form-control">${bno.content}</textarea></td>
		</tr>
		<tr>
			<th>이미지</th>
			<c:choose>
				<c:when test="${empty bno.image }">
					<td colspan="3"></td>
				</c:when>
				<c:otherwise>
					<td colspan="3"><img src="images/${bno.image}" width="100px" style="display: block; margin: 0px auto;"></td>
				</c:otherwise>
			</c:choose>
		</tr>
		<tr>
			<th>작성자</th>
			<td>${bno.writer}</td>
			<th>조회수</th>
			<td>${bno.viewCnt}</td>
		</tr>
		<tr>
			<td colspan="4" align="center">
				<c:choose>
					<c:when test="${!empty logId && logId == bno.writer}">
						<input type="submit" value="수정" class="btn btn-primary"> 
						<input type="button" value="삭제" onclick="location.href='removeBoard.do?bno=${bno.boardNo}'" class="btn btn-warning"> 
					</c:when>
					<c:otherwise>
						<input type="submit" value="수정" disabled> <input type="button" value="삭제" disabled> 			
					</c:otherwise>
				</c:choose>
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
<div class="pagination"></div>

<script>
	let bno = document.querySelector('.boardNo').innerHTML;
	let writer = '${logId}';
	let page = 1;

	function showList(pg = 1) {
		document.querySelectorAll('#list li:not(:nth-of-type(1))').forEach(li => li.remove());
		fetch('replyList.do?bno=' + bno + '&page=' + pg)
		.then(resolve => resolve.json())
		.then(result => {
			if (pg < 0) {
				page = Math.ceil(result.dto.total / 5);
				showList(page);
				return;
			} else if (pg == 0) {
				showList(1);
				return;
			}
			result.list.forEach(reply => {
				let li = makeRow(reply);
				document.querySelector('#list').append(li);
			})
			makePaging(result.dto);
		})
		.catch(err => console.log('err: ', err));
	}
	showList();

	function makePaging(dto = {}) {
		document.querySelector('.pagination').innerHTML = '';
		if (dto.prev) {
			let aTag = document.createElement('a');
			aTag.setAttribute('href', dto.startPage - 1);
			aTag.innerHTML = "&laquo;";
			document.querySelector('.pagination').append(aTag);
		}
		for (let i = dto.startPage; i <= dto.endPage; i++) {
			let aTag = document.createElement('a');
			aTag.setAttribute('href', i);
			aTag.innerHTML = i;
			if (i == page) {
				aTag.className = 'active';
			}
			document.querySelector('.pagination').append(aTag);
		}
		if (dto.next) {
			let aTag = document.createElement('a');
			aTag.setAttribute('href', dto.endPage + 1);
			aTag.innerHTML = "&raquo;";
			document.querySelector('.pagination').append(aTag);
		}

		document.querySelectorAll('.pagination a').forEach(ele => {
			ele.addEventListener('click', function(e) {
				e.preventDefault();
				page = ele.getAttribute('href');
				showList(page);
			}) 
		})
	}

	function makeRow(reply) {
		let temp = document.querySelector('#template').cloneNode(true);
		temp.style.display = 'block';
		temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
		temp.querySelector('b').innerHTML = reply.reply;
		temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
		temp.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;

		temp.querySelector('#template> button').addEventListener('click', function(e) {
			if (writer == 'null' || writer != reply.replyer) {
				alert('권한이 없습니다.');
				return;
			}

			fetch('removeReply.do', {
				method: 'post',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: 'replyNo=' + reply.replyNo
			})
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == 'OK') {
					e.target.parentElement.remove();
					if (document.querySelectorAll('#list> li').length == 1 && page > 1) {
						page = page - 1;
						showList(page - 1);
					} else {
						showList(page);
					}
				} else {
					alert('삭제 실패');
				}
			})
			.catch(err => console.log(err));
		})
		return temp;
	}

	document.querySelector('#addReply').addEventListener('click', function(e) {
		let reply = document.querySelector('#replyContent').value;
		if (!bno || writer == 'null' || !reply) {
			alert('제대로 입력하세요.');
			return;
		}
		
		fetch('addReply.do', {
			method: 'post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: 'bno=' + bno + '&reply=' + reply + '&replyer=' + writer
		})
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {
				// document.querySelector('#list').append(makeRow(result.vo));
				showList(-1);
			} else {
				alert('등록 실패');
			}
		})
		.catch(err => console.log(err));
	})
</script>

<p>
	<a href="boardList.do">목록으로</a>
</p>

