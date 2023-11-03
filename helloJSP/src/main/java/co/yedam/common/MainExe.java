package co.yedam.common;

import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;

public class MainExe {

	public static void main(String[] args) {
		
		BoardDAO dao = new BoardDAO();
		BoardVO vo = new BoardVO();
		
		System.out.println(dao.list());
		
		vo.setTitle("네번째제목");
		vo.setContent("네번째내용");
		vo.setWriter("USER04");
		dao.insert(vo);
		
		System.out.println(dao.list());
		
		vo.setBoardNo(4);
		vo.setTitle("오번째제목");
		vo.setContent("오번째내용");		
		vo.setWriter("USER05");
		
		System.out.println(dao.list());
		
		dao.delete(4);
		
		System.out.println(dao.list());
	}

}
