package co.yedam.common;

import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;

public class MainExe {

	public static void main(String[] args) {
	
	// DB
//	CREATE TABLE BOARD (
//		    BOARD_NO        NUMBER,
//		    TITLE           VARCHAR2(100)   NOT NULL,
//		    CONTENT         VARCHAR2(1000)  NOT NULL,
//		    WRITER          VARCHAR2(30)    NOT NULL,
//		    WRITE_DATE      DATE            DEFAULT SYSDATE,
//		    VIEW_CNT        NUMBER          DEFAULT 0,
//		    IMAGE           VARCHAR2(100),
//		    LAST_UPDATE     DATE            DEFAULT SYSDATE
//		);
//
//		ALTER TABLE BOARD ADD CONSTRAINT BOARD_PK PRIMARY KEY (BOARD_NO);
//
//		CREATE SEQUENCE SEQ_BOARD;
//
//		SELECT * FROM BOARD;
//
//		COMMIT;
//
//		INSERT INTO BOARD (BOARD_NO, TITLE, CONTENT, WRITER)
//		VALUES (SEQ_BOARD.NEXTVAL, '첫번째제목', '첫번째내용', 'USER01');
//		INSERT INTO BOARD (BOARD_NO, TITLE, CONTENT, WRITER)
//		VALUES (SEQ_BOARD.NEXTVAL, '두번째제목', '두번째내용', 'USER02');
//		INSERT INTO BOARD (BOARD_NO, TITLE, CONTENT, WRITER)
//		VALUES (SEQ_BOARD.NEXTVAL, '세번째제목', '세번째내용', 'USER01');

	}
}
