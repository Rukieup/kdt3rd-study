-- 데이터베이스 목록보기
SHOW databases;

-- (데이터베이스 생성)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 데이터베이스 선택 (사용)
USE kdt;

-- 데이터베이스 내 테이블 목록 보기
SHOW tables;

-- ########
-- DDL 
-- 테이블 생성
CREATE TABLE visitor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

-- 테이블 구조 확인
DESC visitor; 

-- DML
-- 테이블 전체 데이터 조회 (read)
SELECT * FROM visitor;

-- 테이블 데이터 추가 (create)
INSERT INTO visitor (name, comment) VALUE ('홍길동', '내가 왔다.');
INSERT INTO visitor (name, comment) VALUE ('이찬혁', '으라차차');

-- DCL
-- MySQL 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED BY 'alslalsl97';
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- MySQL 비번 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
