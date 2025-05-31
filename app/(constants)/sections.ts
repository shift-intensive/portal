import { AppleIcon, FrenchFries, PizzaIcon, RobotIcon, TestTubeIcon } from '@/components/icons';

export const SECTIONS = [
  {
    href: '/web',
    title: 'section.web',
    Icon: PizzaIcon,
    disabled: false
  },
  {
    href: '/ios',
    title: 'section.ios',
    Icon: AppleIcon,
    disabled: true
  },
  {
    href: '/android',
    title: 'section.android',
    Icon: RobotIcon,
    disabled: false
  },
  {
    href: '/test',
    title: 'section.test',
    Icon: TestTubeIcon,
    disabled: false
  },
  {
    href: '/ml',
    title: 'section.ml',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/backend',
    title: 'section.backend',
    Icon: FrenchFries,
    disabled: false
  },
  {
    href: '/system-analysis',
    title: 'section.system-analysis',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/autotests',
    title: 'section.autotests',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/information-security',
    title: 'section.information-security',
    Icon: TestTubeIcon,
    disabled: true
  }
];
