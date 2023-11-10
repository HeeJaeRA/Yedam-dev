CREATE TABLE TBL_PRODUCT (
  PROD_CODE CHAR(4) PRIMARY KEY, -- P001, P002, P003...
  PROD_NAME VARCHAR2(100) NOT NULL, -- 상품이름.
  PROD_DESC VARCHAR2(500) NOT NULL, -- 상품의 설명.
  PRICE NUMBER NOT NULL, -- 상품의 원래가격.
  OFF_PRICE NUMBER NOT NULL, -- 할인된 가격.
  LIKE_IT NUMBER DEFAULT 3, -- 1 ~ 5점의 평점.
  PROD_IMAGE VARCHAR2(100)
);

INSERT INTO TBL_PRODUCT
VALUES ('P001', '과테말라 안티구아', '과테말라 원두', 20.0, 18.0, 5, '과테말라 안티구아.jpg');
INSERT INTO TBL_PRODUCT
VALUES ('P002', '니카라구아 원두', '니카라구아 원두', 22.0, 20.0, 1, '니카라구아 원두.jpg');
INSERT INTO TBL_PRODUCT
VALUES ('P003', '브라질 산토스', '브라질 원두', 24.0, 22.0, 3, '브라질 산토스.jpg');
INSERT INTO TBL_PRODUCT
VALUES ('P004', '에티오피아 예가체프', '에티오피아 원두', 26.0, 24.0, 4, '에티오피아 예가체프.jpg');
INSERT INTO TBL_PRODUCT
VALUES ('P005', '케냐 오크라톡신', '케냐 원두', 19.0, 17.0, 2, '케냐 오크라톡신.jpg');
INSERT INTO TBL_PRODUCT
VALUES ('P006', '코스타리카 따라주', '코스타리카 원두', 20.0, 15.0, 5, '코스타리카 따라주.jpg');

COMMIT;

SELECT * FROM TBL_PRODUCT ORDER BY PROD_CODE;

SELECT * FROM TBL_PRODUCT WHERE PROD_CODE = 'P001';

SELECT * FROM TBL_PRODUCT ORDER BY LIKE_IT DESC;
