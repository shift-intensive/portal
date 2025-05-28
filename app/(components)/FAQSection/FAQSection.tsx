import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';

const FAQ_ITEMS = [
  {
    question: 'Что такое "ШИФТ ИНТЕНСИВ"?',
    answer:
      'ШИФТ ИНТЕНСИВ – это проект для студентов 1-го курса и старше, которые хотят развиваться в IT. В программе школы: лекции, деловые игры и проектные мастерские от IT специалистов. В конце программы участники презентуют собственные финтех-проекты, разработанные под руководством кураторов. Лучшие выпускники ШИФТ приглашаются на работу или стажировку в компании партнеров.'
  },
  {
    question: 'Какие секции есть на интенсиве?',
    answer:
      'На интенсиве представлены следующие секции: Frontend разработка, Backend разработка, Mobile разработка, Data Science и аналитика, DevOps и инфраструктура, UI/UX дизайн, Product менеджмент. Каждая секция включает теоретические лекции, практические задания и работу над реальными проектами под руководством опытных наставников.'
  },
  {
    question: 'Можно ли сменить секцию?',
    answer:
      'После открытия интенсива смена секции невозможна. Выбор секции происходит на этапе подачи заявки, поэтому важно заранее определиться с направлением, которое вам наиболее интересно. Рекомендуем внимательно изучить описание каждой секции и выбрать ту, которая соответствует вашим интересам и целям развития в IT.'
  },
  {
    question: 'Можно ли участвовать в нескольких секциях?',
    answer:
      'Нет, участвовать можно только в одной секции. Это связано с интенсивностью программы и необходимостью полного погружения в выбранное направление. Каждая секция требует значительных временных затрат и концентрации на конкретных технологиях и практиках, поэтому участие в нескольких секциях одновременно невозможно.'
  },
  {
    question: 'Что будет, если пропущу пару дней?',
    answer:
      'Ничего критичного не произойдет, если вы пропустите пару дней. Все материалы и записи лекций остаются доступными для изучения в удобное время. Однако важно помнить, что интенсив требует активного участия и регулярной работы над проектом. Постарайтесь наверстать пропущенный материал и обратитесь к кураторам, если возникнут вопросы.'
  },
  {
    question: 'Когда можно дергать кураторов?',
    answer:
      'Каждый куратор индивидуально подбирает время для ответа на вопросы или код ревью проектов. Можно писать в любое время в доступные источники связи, но ответ может быть не моментальный.'
  }
];

export const FAQSection = () => (
  <section className='container mx-auto mt-20 flex flex-col items-center justify-center'>
    <div className='mb-12 text-center'>
      <div className='text-2xl'>Часто задаваемые вопросы</div>
    </div>

    <div className='flex w-full max-w-2xl flex-col items-center justify-center'>
      <Accordion className='w-full space-y-4' type='single' collapsible>
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem key={index} className='rounded-lg border px-6' value={index.toString()}>
            <AccordionTrigger className='text-left font-medium hover:no-underline'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='text-muted-foreground pb-4'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    <div className='mt-6 text-center'>
      <p className='text-muted-foreground text-xs'>
        Остались вопросы? Напиши нам{' '}
        <a href='mailto:support@acme.ai' className='text-foreground hover:underline'>
          shiftintensiv@gmail.com
        </a>
      </p>
    </div>
  </section>
);
