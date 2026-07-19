(async function () {
  const PUBLIC_KEY = "gd-Pk7SzTFGFOWdoV";
  const SERVICE_ID = "service_zqowuhq";
  const TEMPLATE_ID = "template_gvbkibo";

  emailjs.init(PUBLIC_KEY);

  let location = "확인 불가";
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    location = `${data.city}, ${data.country_name} (IP: ${data.ip})`;
  } catch (e) {
    // pass
  }
 
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const utcOffset = -new Date().getTimezoneOffset() / 60;
  const timezoneDisplay = timezone + " (UTC" + (utcOffset >= 0 ? "+" : "") + utcOffset + ")";
 
  const now = new Date();
  const visitTime = now.toLocaleString("ko-KR", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
 
  emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    name: "웹사이트 방문 알림",
    time: visitTime,
    message:
      "방문 페이지: " + window.location.href + "\n" +
      "유입 경로: " + (document.referrer || "직접 접속") + "\n" +
      "위치: " + location + "\n" +
      "시간대: " + timezoneDisplay + "\n" +
      "기기: " + navigator.userAgent
  });
})();