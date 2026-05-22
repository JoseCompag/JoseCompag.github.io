export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
}

export const projects: Project[] = [
  {
    title: "Distributed Point-of-Sale System",
    description:
      "Architected a fault-tolerant peer-to-peer POS system across multiple nodes. Implemented Two-Phase Commit for atomic price updates, heartbeat-based leader election for automatic failover, and distributed stock aggregation enabling partial sales. All inter-node contracts defined via Protocol Buffers.",
    tags: ["Python", "gRPC", "Protocol Buffers", "Two-Phase Commit"],
    github: "https://github.com/JoseCompag/distributed-pos",
  },
  {
    title: "Conway's Game of Life — Multi-Variant",
    description:
      "Built the full Game of Life engine in Java using strict TDD. Extended to six game variants via Abstract Factory and Strategy patterns. Applied Observer pattern for multiple output targets. Documented all design decisions with UML class diagrams annotated with SOLID principles.",
    tags: ["Java", "TDD", "Strategy", "Abstract Factory", "Observer"],
    github: "https://github.com/JoseCompag/game-of-life",
  },
  {
    title: "Trap the Cat — Adversarial Search",
    description:
      "Implemented a playable Trap the Cat game on a hexagonal 121-cell board. Built a full MiniMax engine with Alpha-Beta pruning for the AI player, with a custom board-state evaluation heuristic. Modelled hexagonal grid adjacency handling all six-direction movement rules.",
    tags: ["Java", "MiniMax", "Alpha-Beta Pruning"],
    github: "https://github.com/JoseCompag/trap-the-cat",
  },
  {
    title: "Train-Controller-Gate — DEVS Simulation",
    description:
      "Formally specified three concurrent subsystems using timed automata and DEVS formalism in CML-DEVS. Conducted iterative simulation runs verifying Safety and Liveness properties. Identified and corrected a controller-state timing defect. Estimated mean transit time via Confidence Interval method.",
    tags: ["PowerDEVS", "DEVS Formalism", "Statistical Analysis"],
    github: "https://github.com/JoseCompag/tcg-simulation",
  },
  {
    title: "BBC Compiler",
    description:
      "Built a compiler in C translating a custom language (.ctds files) into x86 assembly. Covered the full pipeline: lexical analysis with Lex, parsing with Yacc, and code generation. Structured with CMake and Make for reproducible builds; verified across multiple test cases.",
    tags: ["C", "Lex", "Yacc", "x86 Assembly", "CMake"],
    github: "https://github.com/JoseCompag/bbc-compiler",
  },
  {
    title: "Database Comparator",
    description:
      "Developed a Java tool connecting to two PostgreSQL databases, performing structural and data-level comparisons, and outputting a human-readable diff report. Leveraged PLpgSQL stored procedures for server-side comparison logic, reducing data transfer overhead.",
    tags: ["Java", "PostgreSQL", "PLpgSQL", "Maven"],
    github: "https://github.com/JoseCompag/db-comparator",
  },
  {
    title: "Threes Board Game — Test Suite Portfolio",
    description:
      "Completed comprehensive test suites across 9 practical assignments using Input Domain Modeling, graph-based testing, and logic coverage (CACC/RACC). Performed mutation testing with Pitest, property-based testing with jqwik, and automated suite generation with Randoop and EvoSuite.",
    tags: ["JUnit", "Mockito", "Pitest", "jqwik", "JaCoCo"],
    github: "https://github.com/JoseCompag/testing-portfolio",
  },
]
