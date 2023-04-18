import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '内容详尽',
    Svg: require('@site/static/img/Coder.svg').default,
    description: (
      <>
        ArcoGuide 从ArchLinux的安装开始介绍了30+的桌面环境，并未网络封锁地区提供了较为完善的
        科学上网教程，致力帮助各位打造舒适高校的个人桌面环境。
      </>
    ),
  },
  {
    title: '图文丰富',
    Svg: require('@site/static/img/Newsletter.svg').default,
    description: (
      <>
       ArcoGuide搜罗了来自全球各地的各路大神所使用的桌面配置，为你提供了丰富、多样的选择。
       无论你是想要打造高效工作环境，
       还是追求个性化的Linux世界，这些桌面环境都能为你提供灵感和思路
      </>
    ),
  },
  {
    title: '疑难解答',
    Svg: require('@site/static/img/Customer.svg').default,
    description: (
      <>
        ArcoGuide集合了我在n多次的Archlinux重装中累计下来的经验，和在使用众多桌面是踩的坑。并且包含解答网友各种问题的汇总。解决了网络上教程质量良莠不齐的问题
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
