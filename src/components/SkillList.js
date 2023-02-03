import "../style/skillList.scss";
function SkillList() {
  const html = [
    { id: 1, skill: "웹 표준 / 웹 접근성을 고려한 시맨틱 마크업" },
    { id: 2, skill: "태그의 속성 이해 및 적용" },
    { id: 3, skill: "웹사이트 구축 및 스타일 적용" },
    { id: 4, skill: "Flex, Grid, Position을 활용한 다양한 레이아웃 구성" },
    { id: 5, skill: "MediaQuery를 활용한 반응형 웹사이트 구현" },
  ];
  const script = [
    { id: 1, skill: "웹페이지의 동적 기능 부여한 가속성 높은 웹페이지 구성" },
    { id: 2, skill: "객체와 배열을 활용한 체계적인 간략화된 코드구성" },
    { id: 3, skill: "Open API를 활용한 웹페이지 내 기능 연동" },
    { id: 4, skill: "브라우저의 창 사이즈를 이용한 스크롤 이벤트" },
    { id: 5, skill: "window 객체의 속성 이해를 통한 효과적인 코드 활용" },
  ];
  const react = [
    { id: 1, skill: "Component의 생성, 분리, 관리를 통한 효과적인 구성 " },
    { id: 2, skill: "props를 통한 하위 Component의 연동" },
    { id: 3, skill: "Hook을 활용한 역동적인 웹페이지 구현" },
    { id: 4, skill: "Router-dom의 이해와 구현에 적용" },
    { id: 5, skill: "Redux toolkit을 활용한 전체 Data 관리" },
  ];
  const git = [
    { id: 1, skill: "팀 프로젝트 내 팀원과 협업 및 작업물 공유" },
    { id: 2, skill: "UpStream 제한으로 작업물 손상률 감소" },
    { id: 3, skill: "branch 활용으로 안정적인 프로젝트 관리" },
    { id: 4, skill: "Fork / Clone를 이용한 오픈소스 활용" },
  ];
  return (
    <div className="skillList">
      <div className="skillBox">
        <h4>HTML5/CSS3</h4>
        <ul>
          {html.map((item) => (
            <li key={item.id}>{item.skill}</li>
          ))}
        </ul>
      </div>
      <div className="skillBox">
        <h4>JavaScript</h4>
        <ul>
          {script.map((item) => (
            <li key={item.id}>{item.skill}</li>
          ))}
        </ul>
      </div>
      <div className="skillBox">
        <h4>React</h4>
        <ul>
          {react.map((item) => (
            <li key={item.id}>{item.skill}</li>
          ))}
        </ul>
      </div>
      <div className="skillBox">
        <h4>Git/Github</h4>
        <ul>
          {git.map((item) => (
            <li key={item.id}>{item.skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillList;
