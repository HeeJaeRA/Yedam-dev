<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>

<form action="login.do" method="post">
    <table class="table">
        <tr>
            <th>아이디</th>
            <td><input type="text" class="form-control" name="id"></td>
        </tr>
        <tr>
            <th>비밀번호</th>
            <td><input type="password" class="form-control" name="pw"></td>
        </tr>
        <tr>
            <td colspan="2"><input type="submit" value="로그인" class="btn btn-primary"></td>
        </tr>
    </table>
</form>

<%@include file="../layout/footer.jsp"%>