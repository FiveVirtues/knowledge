import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  {
    text: "关于",
    icon: "creative",
    prefix: "/about/",
    link: "/about/",
  },
  {
    text: "文章",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "base",
        icon: "note",
        collapsable: true,
        prefix: "base/",
        children: [
          {
            text: "Algorithms",
            icon: "note",
            collapsable: true,
            prefix: "Algorithms/",
            children: ["part1"],
          },
          {
            text: "Git",
            icon: "note",
            collapsable: true,
            prefix: "Git/",
            children: ["part0"],
          },
          {
            text: "Linux",
            icon: "note",
            collapsable: true,
            prefix: "Linux/",
            children: ["part1", "part2", "part3", "part4"],
          },
          {
            text: "LinuxProxy",
            icon: "note",
            collapsable: true,
            prefix: "LinuxProxy/",
            children: ["part1"],
          }
        ]
      },
      {
        text: "backend",
        icon: "note",
        collapsable: true,
        prefix: "backend/",
        children: [
          {
            text: "Concurrent",
            icon: "note",
            collapsable: true,
            prefix: "Concurrent/",
            children: ["part1"],
          },
          {
            text: "DesignPatterns",
            icon: "note",
            collapsable: true,
            prefix: "DesignPatterns/",
            children: ["part1", "part2", "part3", "part4"],
          },
          {
            text: "JVM",
            icon: "note",
            collapsable: true,
            prefix: "JVM/",
            children: ["part1", "part2", "part3"],
          },
          {
            text: "Kubernetes",
            icon: "note",
            collapsable: true,
            prefix: "Kubernetes/",
            children: ["part1"],
          }
        ]
      },
      {
        text: "bigdata",
        icon: "note",
        collapsable: true,
        prefix: "bigdata/",
        children: [
          {
            text: "Flink",
            icon: "note",
            collapsable: true,
            prefix: "Flink/",
            children: ["part1", "part2", "part3"],
          },
          {
            text: "Flume",
            icon: "note",
            collapsable: true,
            prefix: "Flume/",
            children: ["part1"],
          },
          {
            text: "Hadoop",
            icon: "note",
            collapsable: true,
            prefix: "Hadoop/",
            children: ["part1", "part2", "part3", "part4"],
          },
          {
            text: "HBase",
            icon: "note",
            collapsable: true,
            prefix: "HBase/",
            children: ["part1"],
          },
          {
            text: "Hive",
            icon: "note",
            collapsable: true,
            prefix: "Hive/",
            children: ["part1", "part2", "part3", "part4", "part5"],
          },
          {
            text: "Kafka",
            icon: "note",
            collapsable: true,
            prefix: "Kafka/",
            children: ["part1", "part2", "part3"],
          },
          {
            text: "Spark",
            icon: "note",
            collapsable: true,
            prefix: "Spark/",
            children: ["part1", "part2"],
          },
          {
            text: "Zookeeper",
            icon: "note",
            collapsable: true,
            prefix: "Zookeeper/",
            children: ["part1"],
          }
        ]
      }
    ],
  },
]);
