package co.yedam.board.serviceImpl;

import java.util.List;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;

public class BoardServiceImpl implements BoardService {
	BoardDAO dao = new BoardDAO();

	@Override
	public boolean addBoard(BoardVO vo) {
		return (dao.insert(vo) == 1);
	}

	@Override
	public boolean editBoard(BoardVO vo) {
		return (dao.update(vo) == 1);
	}

	@Override
	public boolean removeBoard(int boardNo) {
		return (dao.delete(boardNo) == 1);
	}

	@Override
	public List<BoardVO> boardList() {
		List<BoardVO> list = dao.list();
		return list;
	}

	@Override
	public BoardVO getBoard(int boardNo) {
		BoardVO vo = dao.getBoard(boardNo);
		return vo;
	}

}
