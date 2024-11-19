const Main = () => {
  return (
    <div style={{ padding: "40px 80px" }}>
      <h2
        style={{ fontSize: "30px", marginBottom: "20px", fontWeight: "bold" }}
      >
        First Clone Page
      </h2>
      <p style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <a href="/pr1" style={{ color: "#626cc5", fontWeight: "bold" }}>
          첫번째 클론페이지 바로가기
        </a>
        <span style={{ color: "#6b6868" }}>
          클론 페이지 디자인 출처 :
          <a
            href="https://d.cafe24.com/sample?productCode=PTMD837550&frame=P"
            target="_blank"
            rel="noreferrer"
          >
            https://d.cafe24.com/sample?productCode=PTMD837550&frame=P
          </a>
        </span>
      </p>
    </div>
  );
};

export default Main;
