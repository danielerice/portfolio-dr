import gptQuestImg from '../assets/GPT.png';
import recipeCodexImg from '../assets/Codex.png';

// To add a project: append an entry here. To remove one: delete its entry.
// `image: null` renders the built-in pixel placeholder using `placeholder`
// text — swap in real art (import it above) whenever it's ready.
// `accent` is one of: cyan | blue | yellow | pink | red (see PixelCard.css).
export const PROJECTS = [
  {
    id: 'gpt-quest',
    title: 'GPT Quest',
    tagline: 'AI text-RPG dungeon crawler',
    blurb: `A browser-based text RPG built with React, Rails, and the OpenAI
API. Let ChatGPT lead you through a transformer-generated dungeon of your
choosing — it continues as long as your imagination will.`,
    accent: 'cyan',
    image: gptQuestImg,
    links: [
      { label: 'GITHUB', href: 'https://github.com/danielerice/GPTQuest' },
      {
        label: 'DEMO ▸',
        href: 'https://www.loom.com/share/af0489adeb784b2d908fcfdb845306e2?sid=ca14765e-922b-466a-8fc5-1b2e0558c9fe',
      },
    ],
  },
  {
    id: 'recipe-codex',
    title: 'Recipe Codex',
    tagline: 'Recipe organization at scale',
    blurb: `Built with React, Ruby, and Bootstrap to organize recipes at any
scale. Made with large restaurant groups in mind, and just as effective for
home enthusiasts.`,
    accent: 'yellow',
    image: recipeCodexImg,
    links: [
      { label: 'GITHUB', href: 'https://github.com/danielerice/Recipe-Codex' },
      {
        label: 'DEMO ▸',
        href: 'https://www.loom.com/share/64f2617a835546b0972b6fdf990efa5d?sid=9a7eeb0e-65d0-4eef-ad2c-5db75463a0af',
      },
    ],
  },
  {
    id: 'blog',
    title: 'Tech Blog',
    tagline: 'Writing on Medium',
    blurb: `A technical blog kept throughout my transition into software
development — updated as I learn and grow as a developer.`,
    accent: 'pink',
    image: null,
    placeholder: 'BLOG',
    links: [{ label: 'READ ▸', href: 'https://medium.com/@danielrice5627' }],
  },
];
