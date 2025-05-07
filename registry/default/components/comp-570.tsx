import Tree, { type TreeNode } from "@/registry/default/ui/tree";

const data: TreeNode[] = [
  {
    id: '0',
    label: 'Documents',
    children: [
      {
        id: '1',
        label: 'Work',
        children: [
          { id: '2', label: 'Expenses.doc' },
          { id: '3', label: 'Resume.doc' },
        ],
      },
      {
        id: '4',
        label: 'Home',
        children: [
          { id: '5', label: 'VacationPictures.jpg' },
          { id: '6', label: 'Recipes.txt' },
        ]
      },
      {
        id: '7',
        label: 'Empty Folder',
        children: []
      }
    ],
  },
  {
    id: '8',
    label: 'Music',
    children: [
      {
        id: '9',
        label: 'Albums',
        children: [
          { id: '10', label: 'Album1.mp3' },
          { id: '11', label: 'Album2.flac' },
          { id: '13', label: 'Album4.flac' },
        ]
      }
    ]
  },
  {
    id: '12',
    label: 'Movies',
  },
];

export default function Component() {
  return <Tree data={data} expandBehavior="item" selectionMode="checkbox" />;
}


