package co.yedam.common;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;

public class MainExe {

	public static void main(String[] args) {
		
		SqlSession session = DataSourceMybatis.getInstance().openSession(true);
		
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		mapper.selectList(1, 1).forEach(rep -> System.out.println(rep));

		// 게시판 DB

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

		// 멤버 DB

//		ALTER TABLE MEM ADD (RESPONSBILITY VARCHAR2(10) DEFAULT 'USER');
//		UPDATE MEM SET RESPONSBILITY = 'ADMIN' WHERE MID = 'M001';
//		UPDATE MEM SET RESPONSBILITY = 'USER';

		// 댓글 DB

//		CREATE SEQUENCE SEQ_REPLY;
//
//		CREATE TABLE REPLY (
//		REPLY_NO    NUMBER,
//		BOARD_NO    NUMBER          NOT NULL,
//		REPLY       VARCHAR2(100)   NOT NULL,
//		REPLYER     VARCHAR2(30)    NOT NULL,
//		REPLY_DATE  DATE            DEFAULT SYSDATE);
//
//		ALTER TABLE REPLY ADD CONSTRAINT REPLY_PK PRIMARY KEY (REPLY_NO);
//
//		SELECT * FROM REPLY;
//
//		COMMIT;
//
//		INSERT INTO REPLY (REPLY_NO, BOARD_NO, REPLY, REPLYER)
//		VALUES (SEQ_REPLY.NEXTVAL, 1, '테스트 댓글 1번', 'USER11');
//		INSERT INTO REPLY (REPLY_NO, BOARD_NO, REPLY, REPLYER)
//		VALUES (SEQ_REPLY.NEXTVAL, 1, '테스트 댓글 2번', 'USER12');
//		INSERT INTO REPLY (REPLY_NO, BOARD_NO, REPLY, REPLYER)
//		VALUES (SEQ_REPLY.NEXTVAL, 1, '테스트 댓글 3번', 'USER11');
//
//		INSERT INTO REPLY (REPLY_NO, BOARD_NO, REPLY, REPLYER)
//		VALUES (SEQ_REPLY.NEXTVAL, 2, '테스트 댓글 1번', 'USER11');
//		INSERT INTO REPLY (REPLY_NO, BOARD_NO, REPLY, REPLYER)
//		VALUES (SEQ_REPLY.NEXTVAL, 2, '테스트 댓글 2번', 'USER12');
//		INSERT INTO REPLY (REPLY_NO, BOARD_NO, REPLY, REPLYER)
//		VALUES (SEQ_REPLY.NEXTVAL, 2, '테스트 댓글 3번', 'USER11');
		
		// 댓글 DB2
	
//		INSERT INTO REPLY (REPLY_NO, BOARD_NO, REPLY, REPLYER)
//		SELECT SEQ_REPLY.NEXTVAL, BOARD_NO, REPLY, REPLYER FROM REPLY WHERE BOARD_NO = 1;
//
//		INSERT INTO REPLY (REPLY_NO, BOARD_NO, REPLY, REPLYER)
//		SELECT SEQ_REPLY.NEXTVAL, BOARD_NO, REPLY, REPLYER FROM REPLY WHERE BOARD_NO = 2;

	}
}
