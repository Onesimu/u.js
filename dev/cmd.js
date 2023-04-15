const wd = fs('./up.txt')
const d = wd.t().t('\n').n().t(1).t(i => i.split(/\s+/)).t(i => `${i[0]}@${i[3]}`).join(' ')
o('pnpm update ' + d)