const fs = require("fs");
const expect = require("chai").expect;
const FileService = require('../src/Services/FileService');
const EmailService = require('../src/Services/EmailService');
const BirthdayService = require('../src/Services/BirthdayService');

const fileService = new FileService();
const emailService = new EmailService();

describe("birthday kata", () => {

    it("should return an array representing the flat file", () => {
      const result = fileService.readFile();
      expect(typeof result).to.equal('object');
    });

    it("should send birthday messages to today's birthday people", () => {
      var birthdayService = new BirthdayService(
        fileService, emailService);
        const send = birthdayService.sendTodayMessages();
        expect(send).to.equal(true);
    });
});
