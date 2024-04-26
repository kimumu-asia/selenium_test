const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  var searchString = "packt publishing";

  //　브라우저가 빌드하고 실행될 때까지 대기
  let driver = await new Builder().forBrowser("chrome").build();

  // 브라우저에서 http://google.com 주소를 요청하여 사이트 오픈
  await driver.get("http://google.com");

  // searchString 값을 전달하여 검색하려는 쿼리를 전송
  await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

  // 페이지 제목 확인 및 출력
  var title = await driver.getTitle();
  console.log("Title is:", title);

  // 실행 후 드라이버 닫아주는 것이 안전
  await driver.quit();
}

example();
