// 기존 포트폴리오에서 확인한 내용만 옮겼습니다. 출처와 제외 항목: CONTENT_SOURCES.md
window.PORTFOLIO = {
  "isTemplate": false,
  "name": {
    "ko": "이준호",
    "en": "LEE JUNHO"
  },
  "badge": {
    "ko": "byeo1ha",
    "en": "byeo1ha"
  },
  "role": {
    "ko": "Unity 클라이언트 개발자",
    "en": "Unity Client Developer"
  },
  "heroDescription": {
    "ko": "다양한 전시 참여와 수상 경험을 바탕으로 성장하고 있습니다.\n현재는 유지보수하기 좋은 구조를 만들기 위해 게임의 구현과 설계를 더 깊이 고민하고 있습니다.",
    "en": "I continue to grow through exhibitions and award-winning projects.\nI am now taking a closer look at how I implement and design games to make their code easier to maintain."
},
  "summary": {
    "ko": "Unity와 C#으로 플레이어 액션, 전투, 상호작용 시스템을 구현합니다.\n다음 프로젝트에서도 유지보수할 수 있는 구조를 고민합니다.",
    "en": "I build player actions, combat, and interaction systems with Unity and C#.\nI care about structures that remain maintainable in the next project."
  },
  "email": "juun030527@gmail.com",
  "github": "https://github.com/Byeo1ha",
  "blog": "https://velog.io/@byeo1ha/posts",
  "location": {
    "ko": "",
    "en": ""
  },
  "heroSpotlight": {
    "projectId": "cleanupday",
    "caption": {
      "ko": "게임 진행 흐름 · 미니게임 · UI 연출",
      "en": "Game flow · Minigames · UI presentation"
    }
  },
  "heroHighlights": [
    { "icon": "trophy", "title": { "ko": "대상 2회", "en": "2 Grand Prizes" }, "label": { "ko": "게임 대회 수상", "en": "Game Competitions" } },
    { "icon": "exhibition", "title": { "ko": "BIC 2025", "en": "BIC 2025" }, "label": { "ko": "전시 참여", "en": "Exhibitor" } }
  ],
  "education": [],
  "experience": [],
  "tools": [],
  "profileCards": [
    {
      "icon": "education",
      "title": {
        "ko": "학업",
        "en": "Education"
      },
      "headline": {
        "ko": "우송대학교",
        "en": "Woosong University"
      },
      "description": {
        "ko": "게임멀티미디어학과 재학",
        "en": "Studying Game Multimedia"
      }
    },
    {
      "icon": "gameplay",
      "title": {
        "ko": "개발 경험",
        "en": "Development"
      },
      "headline": {
        "ko": "게임플레이부터 UI·연출까지",
        "en": "From gameplay to UI and presentation"
      },
      "description": {
        "ko": "개별 기능 구현과 게임 진행 흐름 통합",
        "en": "Implementing features and integrating the game flow"
      }
    },
    {
      "icon": "architecture",
      "title": {
        "ko": "설계 관심",
        "en": "Design Interests"
      },
      "headline": {
        "ko": "객체의 책임 분리와 의존성 관리",
        "en": "Object responsibilities and dependencies"
      },
      "description": {
        "ko": "비동기 처리와 객체 생명주기",
        "en": "Async operations and object lifecycles"
      }
    }
  ],
  "about": {
    "ko": [
      "Unity 클라이언트 개발자를 목표로 공부하고 있습니다. 튜토리얼을 따라 만드는 단계에서 나아가, 게임 안에서 실제로 동작하는 시스템을 직접 설계하고 구현하는 데 집중하고 있습니다.",
      "책임 분리, 상속, 인터페이스, Object Pool, ScriptableObject를 실제 기능에 적용해왔습니다. 최근에는 R3, VContainer, UniTask, DOTween 등을 별도 프로젝트에서 실습하며 배우고 있습니다.",
      "새로운 기술은 작은 프로젝트에서 먼저 연습하고, 그 경험을 다음 팀 프로젝트로 가져오는 방식으로 성장하고 있습니다."
    ],
    "en": [
      "I am studying toward a career as a Unity client developer. Beyond following tutorials, I focus on designing and implementing working game systems myself.",
      "I have applied separation of responsibilities, inheritance, interfaces, object pools, and ScriptableObjects to gameplay features. I am also practicing R3, VContainer, UniTask, and DOTween in separate projects.",
      "I try new technologies in small projects first, then bring those lessons into my next team project."
    ]
  },
  "projects": [
    {
      "id": "soulcollector",
      "name": "Soul Collector",
      "kind": "team",
      "platforms": [],
      "group": {
        "ko": "팀 프로젝트",
        "en": "Team projects"
      },
      "period": "2026.04 — 2026.06",
      "role": {
        "ko": "메인 게임 프로그래머",
        "en": "Main Game Programmer"
      },
      "summary": {
        "ko": "소환수를 설치해 몰려오는 적으로부터 크리스탈을 지키는 2D 타워 디펜스 게임입니다. 소환수 설치, 공격 시스템, 연출, 설정 기능과 팀 기능 통합을 담당했습니다.",
        "en": "A 2D tower defense game about placing summons to protect a crystal. I handled placement, attack systems, presentation, settings, and integration of team features."
      },
      "highlights": {
        "ko": [
          "소환수 설치·위치 가이드, 격자 보정과 설치 가능 여부 검사",
          "근접·투사체·레이저 공격 방식 구현",
          "Object Pool 기반 투사체와 이펙트 재사용",
          "클리어·실패·씬 전환 연출",
          "공통 동작을 TurretBase로 묶고 공격 방식을 분리; 인터페이스로 애니메이션 재생 요청"
        ],
        "en": [
          "Summon placement, positioning guides, grid snapping, and placement validation",
          "Melee, projectile, and laser attack implementations",
          "Object pools for projectiles and effects",
          "Clear, failure, and scene-transition presentation",
          "Shared behavior in TurretBase; separate attack implementations and interface-based animation requests"
        ]
      },
      "stack": [
        "Unity",
        "C#",
        "Object Pool",
        "Interface"
      ],
      "art": "orbit",
      "symbol": "◈",
      "featured": true,
      "image": "./assets/projects/soulcollector.webp",
      "animation": "./assets/projects/soulcollector.gif",
      "video": "./assets/projects/soulcollector.mp4",
      "links": [
        {
          "label": {
            "ko": "GitHub",
            "en": "GitHub"
          },
          "url": "https://github.com/Byeo1ha/SoulCollector"
        },
        {
          "label": {
            "ko": "플레이 영상",
            "en": "Gameplay video"
          },
          "url": "https://youtu.be/SbnAHzEwJqo?si=iudo3Bq4X8eC2RR-"
        }
      ],
      "result": {
        "ko": "2026 교내 캡스톤 A+ / 최우수 팀",
        "en": "2026 campus capstone: A+ / best team"
      }
    },
    {
      "id": "cleanupday",
      "name": "Cleanup Day",
      "kind": "team",
      "platforms": [],
      "group": {
        "ko": "팀 프로젝트",
        "en": "Team projects"
      },
      "period": "2026.04 — 2026.06",
      "role": {
        "ko": "메인 게임 프로그래머",
        "en": "Main Game Programmer"
      },
      "summary": {
        "ko": "“기억을 담아, 정리하는 시간”을 주제로 만든 치유 감성 포인트 앤 클릭 게임입니다. 게임 루프, 미니게임 3종, 방 상호작용과 UI 연출을 담당했습니다.",
        "en": "A healing-themed point-and-click game about organizing memories. I handled the game loop, three minigames, room interactions, and UI presentation."
      },
      "highlights": {
        "ko": [
          "게임 플레이 루프, 씬 이동과 미니게임 트리거",
          "공놀이·터그·목욕 미니게임 및 소품 상호작용",
          "추억 상자와 진행도에 따른 방 색감·배경음 변화",
          "페이드·하이라이트·컷씬 문구 연출",
          "IPropsEvent 인터페이스로 소품과 미니게임 연결 분리",
          "이미지 색상 차이의 원인을 색상 프로파일로 추적하고 sRGB 변환으로 해결"
        ],
        "en": [
          "Game loop, scene navigation, and minigame triggers",
          "Ball play, tug, and bathing minigames with prop interactions",
          "Memory box and progress-based room colors and background music",
          "Fades, highlights, and cutscene text",
          "IPropsEvent interface separating props from minigames",
          "Traced image color differences to color profiles and resolved them through sRGB conversion"
        ]
      },
      "stack": [
        "Unity",
        "C#",
        "Interface",
        "UI"
      ],
      "art": "orbit",
      "symbol": "◈",
      "featured": true,
      "image": "./assets/projects/cleanupday.webp",
      "animation": "./assets/projects/cleanupday.gif",
      "video": "./assets/projects/cleanupday.mp4",
      "links": [
        {
          "label": {
            "ko": "GitHub",
            "en": "GitHub"
          },
          "url": "https://github.com/Byeo1ha/CleanupDay"
        },
        {
          "label": {
            "ko": "플레이 영상",
            "en": "Gameplay video"
          },
          "url": "https://youtu.be/s7HXVZfjiR0?si=G_VClIr413SciTiJ"
        },
        {
          "label": {
            "ko": "Daum",
            "en": "Daum"
          },
          "url": "https://v.daum.net/v/20260630175602360"
        },
        {
          "label": {
            "ko": "Newspim",
            "en": "Newspim"
          },
          "url": "https://www.newspim.com/news/view/20260630000887"
        },
        {
          "label": {
            "ko": "Chungnamilbo",
            "en": "Chungnamilbo"
          },
          "url": "https://www.chungnamilbo.co.kr/news/articleView.html?idxno=896364"
        }
      ],
      "result": {
        "ko": "2026 대전 인디 게임 스쿨 우수상\n2026 제1회 기능성 게임 공모전 대상",
        "en": "2026 Daejeon Indie Game School: Excellence Award\n2026 1st Serious Games Contest: Grand Prize"
      }
    },
    {
      "id": "barrelgoodbarrel",
      "name": "Barrel good Barrel",
      "kind": "team",
      "platforms": [],
      "group": {
        "ko": "팀 프로젝트",
        "en": "Team projects"
      },
      "period": "2025.05 — 2025.07",
      "role": {
        "ko": "서브 게임 프로그래머",
        "en": "Sub Game Programmer"
      },
      "summary": {
        "ko": "샷건과 탄환 조합 중심의 탑다운 로그라이크 슈팅 게임입니다. 방 이동·랜덤 방 생성·상호작용·튜토리얼·보스 컷씬과 주요 연출을 담당했습니다.",
        "en": "A top-down roguelike shooter built around shotguns and ammunition combinations. I worked on room transitions, random room generation, interactions, tutorials, boss cutscenes, and presentation."
      },
      "highlights": {
        "ko": [
          "방 사이 이동, 랜덤 방 생성과 포탈 이동",
          "상점·포션 상호작용과 튜토리얼",
          "보스 등장 컷씬과 주요 연출",
          "첫 본격 협업 프로젝트에서 전시와 수상을 경험하고, 이후 책임 분리와 구조 설계를 더 의식하게 됨"
        ],
        "en": [
          "Room transitions, random room generation, and portals",
          "Shop and potion interactions, and tutorials",
          "Boss introduction cutscenes and presentation",
          "My first substantial collaboration, with exhibition and award experience that encouraged stronger attention to responsibility separation and architecture"
        ]
      },
      "stack": [
        "Unity",
        "C#"
      ],
      "art": "orbit",
      "symbol": "◈",
      "featured": true,
      "image": "./assets/projects/barrelgoodbarrel.webp",
      "animation": "./assets/projects/barrelgoodbarrel.gif",
      "video": "./assets/projects/barrelgoodbarrel.mp4",
      "links": [
        {
          "label": {
            "ko": "GitHub",
            "en": "GitHub"
          },
          "url": "https://github.com/Byeo1ha/Barrel-good-Barrel"
        },
        {
          "label": {
            "ko": "플레이 영상",
            "en": "Gameplay video"
          },
          "url": "https://youtu.be/pGit7UcJFyk?si=15hZry3weSTExs-B"
        }
      ],
      "result": {
        "ko": "2025 대전 게임 브릿지 인디 게임어스 대상 / BIC 전시 참여",
        "en": "2025 Daejeon Game Bridge Indie Gamers: Grand Prize / BIC exhibition"
      }
    },
    {
      "id": "hungryfoxy2",
      "name": "Hungry Foxy 2",
      "kind": "solo",
      "platforms": [],
      "group": {
        "ko": "개인 프로젝트",
        "en": "Solo projects"
      },
      "period": "2025.04 — 2025.06",
      "role": {
        "ko": "1인 개발",
        "en": "Solo Developer"
      },
      "summary": {
        "ko": "체리를 획득한 뒤 집으로 돌아가는 왕복형 2D 플랫포머입니다. 처음 만들었던 게임을 다시 개발하며 직접 구현하는 감각을 확인한 개인 프로젝트입니다.",
        "en": "A round-trip 2D platformer about collecting cherries and returning home. A solo remake of my first game, revisiting my ability to implement gameplay independently."
      },
      "highlights": {
        "ko": [
          "전체 게임 플레이 루프와 플레이어 이동·점프·공격",
          "아이템 획득과 클리어 조건",
          "일시 정지·설정 저장",
          "씬 전환·카메라·피격·사망 연출",
          "당시에는 SOLID와 책임 분리에 대한 이해가 부족했지만, 코드를 이해하고 직접 구현하는 능력을 확인한 성장 기록"
        ],
        "en": [
          "Complete game loop, player movement, jumping, and attacks",
          "Item collection and clear conditions",
          "Pause and persistent settings",
          "Scene transitions, camera, hit reactions, and death presentation",
          "A record of growing implementation skills, while my understanding of SOLID and separation of responsibilities was still developing"
        ]
      },
      "stack": [
        "Unity",
        "C#"
      ],
      "art": "orbit",
      "symbol": "◈",
      "featured": true,
      "image": "./assets/projects/hungryfoxy2.webp",
      "animation": "./assets/projects/hungryfoxy2.gif",
      "video": "./assets/projects/hungryfoxy2.mp4",
      "links": [
        {
          "label": {
            "ko": "GitHub",
            "en": "GitHub"
          },
          "url": "https://github.com/Byeo1ha/HungryFoxy2"
        },
        {
          "label": {
            "ko": "플레이 영상",
            "en": "Gameplay video"
          },
          "url": "https://youtu.be/iHADhwW7bAk?si=Dv-EDdTyjhJfCKVM"
        }
      ]
    }
  ],
  "work": [
    {
      "id": "wsu-capstone",
      "name": {
        "ko": "Project Ria",
        "en": "Project Ria"
      },
      "repository": "WSU_Capstone",
      "period": "2026.09 —",
      "status": {
        "ko": "개발 중",
        "en": "In development"
      },
      "description": {
        "ko": "탑을 오르며 보스를 공략하고 처치하는 2D 플랫포머 액션 게임입니다.",
        "en": "A 2D platformer action game about climbing a tower and defeating its bosses."
      },
      "role": {
        "ko": "보스 관련 요소를 제외한 플레이어, 인게임 시스템과 게임 진행 흐름을 담당합니다.",
        "en": "Responsible for the player, in-game systems, and game flow, excluding boss-related elements."
      },
      "scopeNote": {
        "ko": "보스 패턴·행동 등 보스 관련 요소를 제외한 시스템을 맡아 개발하고 있습니다.",
        "en": "I am developing the systems outside boss patterns, behavior, and other boss-related elements."
      },
      "scope": [
        {
          "title": {
            "ko": "플레이어",
            "en": "Player"
          },
          "description": {
            "ko": "플레이어 행동, 공격과 체력 시스템",
            "en": "Player actions, attacks, and health systems"
          }
        },
        {
          "title": {
            "ko": "인게임 시스템",
            "en": "In-game systems"
          },
          "description": {
            "ko": "보스 관련 요소를 제외한 인게임 기능과 시스템 연결",
            "en": "In-game features and system integration, excluding boss-related elements"
          }
        },
        {
          "title": {
            "ko": "게임 진행",
            "en": "Game flow"
          },
          "description": {
            "ko": "게임플레이 루프, 비동기 씬 로드와 타이틀",
            "en": "Gameplay loop, asynchronous scene loading, and the title screen"
          }
        }
      ],
      "cases": [
        {
          "title": {
            "ko": "입력 전달과 전투 로직 분리",
            "en": "Separating input delivery from combat logic"
          },
          "description": {
            "ko": "InputManager에서 입력을 전달하고, 플레이어 공격 컴포넌트에서 행동 조건과 전투 처리를 다룹니다.",
            "en": "InputManager delivers input, while player attack components handle action conditions and combat behavior."
          },
          "sources": [
            {
              "label": "InputManager.cs",
              "url": "https://github.com/Byeo1ha/WSU_Capstone/blob/d0b91d51d9e0507fc13ba75d6c24a23bbff4309f/Assets/00_Scripts/InputManager.cs"
            },
            {
              "label": "PlayerNormalAttack.cs",
              "url": "https://github.com/Byeo1ha/WSU_Capstone/blob/d0b91d51d9e0507fc13ba75d6c24a23bbff4309f/Assets/00_Scripts/Player/PlayerNormalAttack.cs"
            }
          ]
        },
        {
          "title": {
            "ko": "공격 유형별 풀과 비활성화 시 작업 취소",
            "en": "Attack-specific pools and cancellation on disable"
          },
          "description": {
            "ko": "공격 유형별 히트박스 풀을 의존성 주입으로 연결합니다. 히트박스가 비활성화되면 지연 작업의 취소 토큰을 취소하고 정리합니다.",
            "en": "Attack-specific hitbox pools are connected through dependency injection. Disabling a hitbox cancels and disposes the token used by its delayed work."
          },
          "sources": [
            {
              "label": "PlayerLifetimeScope.cs",
              "url": "https://github.com/Byeo1ha/WSU_Capstone/blob/d0b91d51d9e0507fc13ba75d6c24a23bbff4309f/Assets/00_Scripts/LifetimeScope/PlayerLifetimeScope.cs"
            },
            {
              "label": "AttackHitbox.cs",
              "url": "https://github.com/Byeo1ha/WSU_Capstone/blob/d0b91d51d9e0507fc13ba75d6c24a23bbff4309f/Assets/00_Scripts/Hitbox/AttackHitbox.cs"
            }
          ]
        },
        {
          "title": {
            "ko": "행동 목표에 따른 비동기 튜토리얼",
            "en": "An asynchronous tutorial driven by action goals"
          },
          "description": {
            "ko": "이동·점프·공격 등 플레이어 행동의 목표 달성을 확인하며 튜토리얼 단계를 비동기로 진행합니다.",
            "en": "Tutorial stages progress asynchronously as the player meets goals for movement, jumping, and attacks."
          },
          "sources": [
            {
              "label": "TutorialEvent.cs",
              "url": "https://github.com/Byeo1ha/WSU_Capstone/blob/d0b91d51d9e0507fc13ba75d6c24a23bbff4309f/Assets/00_Scripts/Tutorial/TutorialEvent.cs"
            }
          ]
        }
      ],
      "stack": [
        "Unity",
        "C#",
        "VContainer",
        "UniTask",
        "R3",
        "DOTween"
      ],
      "detailStack": [
        "Unity",
        "C#",
        "VContainer",
        "UniTask",
        "R3",
        "DOTween",
        "New Input System",
        "UnityEngine.Pool"
      ],
      "url": "https://github.com/Byeo1ha/WSU_Capstone"
    }
  ],
  "releaseCase": {
    "id": "moonlight-witch",
    "name": "Moonlight Witch",
    "status": {
      "ko": "스토어 출시",
      "en": "Released"
    },
    "summary": {
      "ko": "AI를 활용해 제작한 오프라인 싱글플레이 게임입니다.",
      "en": "An offline single-player game created with AI."
    },
    "roles": [
      {
        "label": {
          "ko": "담당",
          "en": "My role"
        },
        "description": {
          "ko": "초기 아이디어, 개발 방향 설정, AI 제작 진행",
          "en": "Initial idea, development direction, and directing the AI creation process"
        }
      },
      {
        "label": {
          "ko": "제작 방식",
          "en": "Production approach"
        },
        "description": {
          "ko": "코드와 이미지 대부분을 AI로 생성",
          "en": "Most code and images were generated with AI"
        }
      },
      {
        "label": {
          "ko": "스토어 등록·심사",
          "en": "Store submission & review"
        },
        "description": {
          "ko": "팀원 담당",
          "en": "Handled by a teammate"
        }
      }
    ],
    "url": "https://store.epicgames.com/p/moonlightwitch-855d75"
  },
  "skills": [
    {
      "id": "core",
      "icon": "core",
      "name": {
        "ko": "주력 개발 환경",
        "en": "Core Development"
      },
      "items": [
        "Unity",
        "C#"
      ]
    },
    {
      "id": "unity",
      "icon": "unity",
      "name": {
        "ko": "Unity 라이브러리·기능",
        "en": "Unity Libraries & Features"
      },
      "items": [
        "VContainer",
        "UniTask",
        "R3",
        "DOTween",
        "New Input System",
        "Shader Graph"
      ]
    },
    {
      "id": "design",
      "icon": "design",
      "name": {
        "ko": "설계와 구현",
        "en": "Design & Implementation"
      },
      "items": [
        {
          "ko": "인터페이스",
          "en": "Interfaces"
        },
        {
          "ko": "상속",
          "en": "Inheritance"
        },
        {
          "ko": "의존성 주입",
          "en": "Dependency Injection"
        },
        "Factory",
        "Observer",
        "Object Pool",
        "ScriptableObject"
      ]
    },
    {
      "id": "tools",
      "icon": "tools",
      "name": {
        "ko": "협업·개발 도구",
        "en": "Collaboration & Development Tools"
      },
      "items": [
        "Git",
        "GitHub",
        "Visual Studio Code"
      ]
    },
    {
      "id": "ai",
      "icon": "ai",
      "name": {
        "ko": "AI 개발 워크플로우",
        "en": "AI Development Workflow"
      },
      "items": [
        "Codex CLI",
        "oh-my-codex",
        "Unity MCP"
      ],
      "description": {
        "ko": "AI 에이전트와 Unity MCP를 활용한 개발 방식도 경험했습니다.",
        "en": "I have also explored development workflows using AI agents and Unity MCP."
      }
    },
    {
      "id": "additional",
      "icon": "additional",
      "name": {
        "ko": "추가 경험",
        "en": "Additional Experience"
      },
      "items": [
        "C",
        "C++",
        "Unreal Engine",
        "Blueprint",
        "Netcode for GameObjects"
      ]
    }
  ],
  "awards": [
    {
      "id": "cleanupday-serious-games",
      "year": "2026",
      "title": {
        "ko": "제1회 기능성 게임 공모전 대상",
        "en": "1st Serious Games Contest — Grand Prize"
      },
      "project": "Cleanup Day"
    },
    {
      "id": "cleanupday",
      "year": "2026",
      "title": {
        "ko": "대전 인디 게임 스쿨 우수상",
        "en": "Daejeon Indie Game School — Excellence Award"
      },
      "project": "Cleanup Day",
      "image": "./assets/awards/cleanupday-thumb.webp",
      "fullImage": "./assets/awards/cleanupday.jpg"
    },
    {
      "id": "barrelgoodbarrel",
      "year": "2025",
      "title": {
        "ko": "대전 게임 브릿지 인디 게임어스 대상",
        "en": "Daejeon Game Bridge Indie Gamers — Grand Prize"
      },
      "project": "Barrel good Barrel",
      "image": "./assets/awards/barrelgoodbarrel-thumb.webp",
      "fullImage": "./assets/awards/barrelgoodbarrel.jpg"
    },
    {
      "id": "bic",
      "year": "2025",
      "title": {
        "ko": "BIC 전시 참여",
        "en": "BIC exhibition"
      },
      "project": "Barrel good Barrel",
      "image": "./assets/awards/bic-thumb.webp",
      "fullImage": "./assets/awards/bic.png"
    },
    {
      "id": "agency",
      "year": "2025",
      "title": {
        "ko": "대전콘텐츠진흥원 전시 참여",
        "en": "Daejeon Content Agency exhibition"
      },
      "project": "Barrel good Barrel",
      "image": "./assets/awards/agency-thumb.webp",
      "fullImage": "./assets/awards/agency.png"
    }
  ]
};
