import { AppleIcon, FrenchFries, PizzaIcon, RobotIcon, TestTubeIcon } from '@/components/icons';

export const SECTIONS = [
  {
    href: '/web',
    title: 'Веб',
    description: 'Создание современных веб-сайтов',
    Icon: PizzaIcon,
    disabled: false
  },
  {
    href: '/ios',
    title: 'iOS',
    description: 'IOS разработка это недорого',
    Icon: AppleIcon,
    disabled: true
  },
  {
    href: '/android',
    title: 'Android',
    description: 'Anroid приложения для всех',
    Icon: RobotIcon,
    disabled: false
  },
  {
    href: '/test',
    title: 'Тестирование',
    description: 'Тестирование со всех сторон',
    Icon: TestTubeIcon,
    disabled: false
  },
  {
    href: '/ml',
    title: 'Machine Learning',
    description: 'Машинное обучение',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/backend',
    title: 'Backend',
    description: 'Серверная разработка',
    Icon: FrenchFries,
    disabled: false
  },
  {
    href: '/system-analysis',
    title: 'Системный анализ',
    description: 'Анализ и проектирование систем',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/autotests',
    title: 'Автотесты',
    description: 'Автоматизированное тестирование',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/information-security',
    title: 'Информационная безопасность',
    description: 'Защита информационных систем',
    Icon: TestTubeIcon,
    disabled: true
  }
];
