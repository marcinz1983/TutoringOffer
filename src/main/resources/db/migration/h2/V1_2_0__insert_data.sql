--APP_USER
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('IXHOf10EodSqriYg7vuD0gYeda42','diego','9diego.venutooo@ttmgss.com','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('CHMyE7FN8MdpKRt69Ny2Z9kpaE32','khaled','zkhaled0@niwod.com','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('wGTIM9otBAetTwzxh14fU9g4NMm1','josias','3josias.dias@tunnelerph.com','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('Xw85IA89WOXHXUkXrmWSC6VzSb72','karol','karol@op.pl','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('5lfgnYp1AWYozNj2PfEG1g3ivoz2','adye','adye47@hotmail.com','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('pAhZcDO7zxdzFvkDJoFKgWUFSxP2','ehack','ehack55464f@oymuloe.com','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('lds2TKJhGgdYlBGiNlIpOqEcTdn1','troad','tfoad.ramziz@aloxy.ml','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('WZAmVKdEWrQa7UhMRQydgyRJEbZ2','xsaf','xsarfarazahme@docd.site','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('OtJl0KrvTMQ7c3LrgWtzXXTXcAw1','abu1','1abu@nbobd.com','false','+488883528321');
Insert into APP_USER (FIREBASE_UID,FIREBASE_NAME,FIREBASE_EMAIL,FIREBASE_EMAIL_VERIFIED,PHONE_NUMBER) VALUES ('QWp0rdRlDjOHKSMjomYBG7bCxKg1','lsoma','lsoma@halumail.com','false','+488883528321');
--OFFER
INSERT INTO OFFER (BACKGROUND_DESCRIPTION,FIRST_NAME,LAST_NAME,LONG_DESCRIPTION,RATE_DESCRIPTION,SHORT_DESCRIPTION,UUID,APP_USER_ID) VALUES
('Do??wiadczony programista','Karol','Milabiwski','Super korepetycj?? z Javy','Za 1h','Korepetycje Java', '2b733549-d2cc-40f0-b7f3-9bfa9f3c1b89',1),
('Senior','Artur','XXXXXXXX','Super korepetycj?? z Python','Za 1h','Korepetycje Python', 'be50b00f-ec34-499b-90f2-fac351cb7630',2),
('java developer','Marek','YYYYYYYY','Super korepetycj?? z C#','Za 1h','Korepetycje C#', 'ba90cb75-0657-4c56-890d-7c6f65ebd677',3),
('Do??wiadczony programista','Filip','ZZZZZZZZZZ','Super korepetycj?? z Javy','Za 1h','Korepetycje Java', '46682d5a-57be-4494-bad3-3604991593a1',4),
('Do??wiadczony programista','Tomasz','TTTTTT','Super korepetycj?? z Javy','Za 1h','Korepetycje Java', '3719721b-22da-4d39-9baa-82e91c71275b',5),
('Do??wiadczony programista','Krzysztof','EEEEEEEEE','Super korepetycj?? z Javy','Za 1h','Korepetycje Java', '14925687-428a-4585-8e5b-430ad4d90880',6),
('Do??wiadczony programista','Michal','UUUUUUU','Super korepetycj?? z Javy','Za 1h','Korepetycje Java', '665f16ab-c2e9-45a5-b2d4-69b53d68962e',7),
('Do??wiadczony programista','Jakub','RRRRRRR','Super korepetycj?? z Javy','Za 1h','Korepetycje Java', '3a0d2c5e-7840-4697-87a7-4eaec0ee17fb',8),
('Do??wiadczony programista','Lukasz','IIIIIIII','Super korepetycj?? z C#','Za 1h','Korepetycje Java', 'e537d801-e1e9-4503-890b-e4f006f0db5d',9),
('Do??wiadczony programista','Pawel','WWWWWW','Super korepetycj?? z Javy','Za 1h','Korepetycje Java', '8425730d-f14d-4b24-aa5e-da7ccc5a1615',1),
('Do??wiadczony programista','Wieslaw','UUUUUUU','Super korepetycj?? z Javy','Za 1h','Korepetycje Java', 'e2a01496-30cb-4dba-8fe6-f9d7d17c5269',2);
--PRICE
INSERT INTO PRICE (DESCRIPTION, PRICE, CURRENCY, MAIN_PRICE, OFFER_ID) values
('Cena za godzine', 60, 'PLN', false, 1),
('Cena za 2 godziny', 100, 'PLN', false, 1),
('Cena za godzine', 100, 'PLN', false, 2),
('Cena za 2 godziny', 180, 'PLN', false, 2),
('Cena za godzine', 60, 'PLN', false, 3),
('Cena za 2 godziny', 100, 'PLN', false, 3),
('Cena za godzine', 100, 'PLN', false, 4),
('Cena za 2 godziny', 180, 'PLN', false, 4),
('Cena za godzine', 60, 'PLN', false, 5),
('Cena za 2 godziny', 100, 'PLN', false, 5),
('Cena za godzine', 100, 'PLN', false, 6),
('Cena za 2 godziny', 180, 'PLN', false, 6),
('Cena za godzine', 60, 'PLN', false, 7),
('Cena za 2 godziny', 100, 'PLN', false, 7),
('Cena za godzine', 100, 'PLN', false, 8),
('Cena za 2 godziny', 180, 'PLN', false, 8),
('Cena za godzine', 60, 'PLN', false, 9),
('Cena za 2 godziny', 100, 'PLN', false, 10);
--OPINION
Insert into OPINION (TITLE,CONTENT,RATE,APP_USER_ID,OFFER_ID) VALUES ('Super hiper nauczyciel','Jestem mega zadowolony z korepetycji z panem','5','1','1');
Insert into OPINION (TITLE,CONTENT,RATE,APP_USER_ID,OFFER_ID) VALUES ('Typowy Janusz','Tylko kasa, nic nie umie','1','2','1');
Insert into OPINION (TITLE,CONTENT,RATE,APP_USER_ID,OFFER_ID) VALUES ('Oszuka?? mnie','Wzia?? 200z?? a i tak nic nie umiem','1','3','4');
Insert into OPINION (TITLE,CONTENT,RATE,APP_USER_ID,OFFER_ID) VALUES ('Mega fajna atmosfera','Zaj??cia bardzo fajnie prowadzone','4','4','3');
Insert into OPINION (TITLE,CONTENT,RATE,APP_USER_ID,OFFER_ID) VALUES ('Uczyli mnie lepsi','Taki sobie nauczyciel, ni w z??b ni w oko','2','5','5');
--EXPERIENCE
Insert into EXPERIENCE (NAME,OFFER_ID) VALUES ('J??zyki programowania','1');
Insert into EXPERIENCE (NAME,OFFER_ID) VALUES ('J??zyki programowania','2');
Insert into EXPERIENCE (NAME,OFFER_ID) VALUES ('J??zyki programowania','3');
Insert into EXPERIENCE (NAME,OFFER_ID) VALUES ('J??zyki programowania','4');
Insert into EXPERIENCE (NAME,OFFER_ID) VALUES ('J??zyki programowania','5');
Insert into EXPERIENCE (NAME,OFFER_ID) VALUES ('J??zyki programowania','6');
Insert into EXPERIENCE (NAME,OFFER_ID) VALUES ('J??zyki programowania','7');
Insert into EXPERIENCE (NAME,OFFER_ID) VALUES ('J??zyki programowania','8');
--SKILL
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('Java','1');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('C#','1');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('Python','1');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('Python','2');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('TypeScript','3');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('JavaScript','4');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('Python','5');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('HTML','5');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('CSS','7');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('HTML','7');
Insert into SKILL (VALUE,EXPERIENCE_ID) VALUES ('JavaScript','7');
--SPECIALIZATION
Insert into SPECIALIZATION (SHORT_NAME,LONG_NAME,ICON_IMAGE,VERIFIED) VALUES ('Java','Java','',true);
Insert into SPECIALIZATION (SHORT_NAME,LONG_NAME,ICON_IMAGE,VERIFIED) VALUES ('JS','Java Script','',true);
Insert into SPECIALIZATION (SHORT_NAME,LONG_NAME,ICON_IMAGE,VERIFIED) VALUES ('Python','Python','',true);
Insert into SPECIALIZATION (SHORT_NAME,LONG_NAME,ICON_IMAGE,VERIFIED) VALUES ('PHP','PHP','',true);
Insert into SPECIALIZATION (SHORT_NAME,LONG_NAME,ICON_IMAGE,VERIFIED) VALUES ('VB','Visual Basic','',true);
Insert into SPECIALIZATION (SHORT_NAME,LONG_NAME,ICON_IMAGE,VERIFIED) VALUES ('C++','C++','',true);
Insert into SPECIALIZATION (SHORT_NAME,LONG_NAME,ICON_IMAGE,VERIFIED) VALUES ('C#','C#','',true);
--OFFER_SPECIALIZATION
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('1','1');
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('1','2');
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('2','1');
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('4','1');
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('4','3');
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('4','4');
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('5','6');
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('5','5');
Insert into OFFER_SPECIALIZATIONS (OFFER_ID,SPECIALIZATION_ID) VALUES ('5','3');

--ROLE
INSERT INTO ROlE (NAME) VALUES ('USER');
INSERT INTO ROlE (NAME) VALUES ('ADMIN');
INSERT INTO ROlE (NAME) VALUES ('SUPER_ADMIN');

--APP_USER_ROLE
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (1, 1);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (2, 1);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (3, 2);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (4, 1);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (5, 2);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (6, 3);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (7, 1);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (8, 2);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (9, 3);
INSERT INTO USER_ROLE (USER_ID,ROLE_ID) VALUES (10,1);