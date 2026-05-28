"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  LineChart, 
  BookOpen, 
  Plane, 
  PenTool, 
  Database,
  Terminal,
  Trophy,
  Hammer
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-300 via-yellow-200 to-red-300 animate-pulse blur-md" />
          <Image
            src="/avatar.png"
            alt="Kim Minjun Avatar"
            width={128}
            height={128}
            className="rounded-full relative z-10 border-2 border-white/20 object-cover bg-zinc-900"
          />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            김민준 <span className="text-2xl text-zinc-400 font-medium">Minjun Kim</span>
          </h1>
          <p className="text-lg text-lime-200 font-medium">
            데이터와 로직을 사랑하는 파이낸스경영학도
          </p>
          <div className="flex justify-center gap-4 text-sm text-zinc-400 mt-2">
            <span>🎓 한양대학교 (2025073663)</span>
            <span>📍 Seoul / Busan</span>
          </div>
        </div>
      </motion.section>

      {/* About & Workstyle */}
      <motion.section variants={itemVariants} className="glass-panel rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <BrainCircuit className="text-yellow-300 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-white">Workstyle & Philosophy</h2>
        </div>
        <p className="text-zinc-300 leading-relaxed">
          한 가지 일에 깊이 몰입하는 <strong>딥워크(Deep Work)</strong>를 지향합니다. 최소한의 시간으로 최대의 효율을 이끌어내며, 
          AI를 단순한 도우미가 아닌 코딩 논리와 자동화 파트너로 적극 활용합니다. 복잡한 소통보다는 직관적인 데이터와 
          결과물로 증명하는 것을 선호합니다.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
          <Terminal className="text-lime-300 w-6 h-6" />
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Python", icon: <Code2 size={20} />, color: "text-blue-400" },
            { name: "AWS", icon: <Database size={20} />, color: "text-orange-400" },
            { name: "Stats Modeling", icon: <LineChart size={20} />, color: "text-red-300" },
            { name: "Next.js & TS", icon: <Code2 size={20} />, color: "text-zinc-300" },
          ].map((skill, idx) => (
            <div key={idx} className="glass-panel rounded-xl p-4 flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
              <div className={skill.color}>{skill.icon}</div>
              <span className="font-medium text-zinc-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
          <Trophy className="text-yellow-300 w-6 h-6" />
          Projects & Achievements
        </h2>
        <div className="space-y-4">
          <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/10 rounded-full blur-3xl group-hover:bg-red-400/20 transition-colors" />
            <h3 className="text-xl font-medium text-white mb-2">Quant Trading Bot Development</h3>
            <p className="text-zinc-400 text-sm mb-3">Python / AWS / Statistical Analysis</p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Z-score 및 허스트 지수(Hurst Exponent) 기반의 통계적 차익거래 모델을 구현하고 자동 매매 프로그램을 
              개발 및 유지보수 중입니다. AWS 환경에서 서버 비용을 최적화하며 실전 트레이딩을 운영하고 있습니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel rounded-xl p-6">
              <h3 className="text-lg font-medium text-white mb-2">Descartes Philosophy Essay</h3>
              <p className="text-zinc-400 text-sm mb-3">Academic Writing</p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                데카르트의 '방법서설' 개념과 현대인의 삶의 경험을 연결하는 철학적 분석 에세이를 성공적으로 완성했습니다.
              </p>
            </div>
            
            <div className="glass-panel rounded-xl p-6">
              <h3 className="text-lg font-medium text-white mb-2">MATLAB Voice Analysis</h3>
              <p className="text-zinc-400 text-sm mb-3">MATLAB / Presentation</p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                영어 기술 단위 발음을 포함한 데이터 시각화 및 프레젠테이션 비디오 제작 프로젝트를 완료했습니다.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interests & Goals */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel rounded-xl p-6 border-t-2 border-t-lime-300">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-lime-300 w-5 h-5" />
            <h3 className="text-lg font-medium text-white">Data-Driven Hobbies</h3>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            단순한 플레이를 넘어, 복잡한 룰을 가진 온라인 게임 시스템의 메타 데이터를 수집하고 통계 모델에 기반한 
            최적의 대응 전략을 수립하는 것을 즐깁니다. 관련 커뮤니티에서 정량적인 데이터 분석 결과를 공유하며 
            활발히 소통하고 있습니다.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6 border-t-2 border-t-yellow-300">
          <div className="flex items-center gap-3 mb-4">
            <Hammer className="text-yellow-300 w-5 h-5" />
            <h3 className="text-lg font-medium text-white">Metal & Resin Crafting</h3>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            정밀한 금속 부품과 특수 소재를 결합한 하이퀄리티 DIY 공예를 즐깁니다. 화학적 특성을 고려하여 
            UV 램프 없이도 견고하고 완벽한 레진 마감을 얻는 공정을 연구하며, 디테일한 금속 공예품을 제작합니다.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6 border-t-2 border-t-red-300 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="text-red-300 w-5 h-5" />
            <h3 className="text-lg font-medium text-white">Experiences & Achievements</h3>
          </div>
          <ul className="list-disc list-inside text-zinc-300 text-sm space-y-2">
            <li><strong>특수 역량 취득:</strong> 1종 보통(수동) 및 1종 대형 운전면허를 연이어 취득하여, 다목적 및 특수 차량 운행 등 폭넓은 물리적 활동 반경 확보</li>
            <li><strong>글로벌 인사이트:</strong> 성공적인 호주 체류 경험을 통해 낯선 환경에 유연하게 적응하고 다양한 시각과 글로벌 인사이트 습득</li>
            <li><strong>커뮤니티 활동:</strong> 한양대 학술 커뮤니티 및 온라인 전략 분석 모임의 멤버로서 지속적인 인사이트 공유 및 리더십 발휘</li>
          </ul>
        </div>
      </motion.section>
      
      <motion.footer variants={itemVariants} className="text-center text-zinc-500 text-sm pt-8 pb-4">
        © 2026 Minjun Kim. Crafted with Next.js & Tailwind CSS.
      </motion.footer>
    </motion.div>
  );
}
