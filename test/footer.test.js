import { Selector } from 'testcafe';

fixture`Footer Test`
  .page`http://localhost:3002`; 

test('Verificar elementos en el footer', async t => {
  
  await t.expect(Selector('img[src*="botones.svg"]').exists).ok();

  
  await t.expect(Selector('p').withText('Somos estudiantes de la Tecnicatura Superior de Software').exists).ok();

  
  await t.expect(Selector('img[src*="instagram.svg"]').exists).ok();
  await t.expect(Selector('img[src*="linkedin.svg"]').exists).ok();
  await t.expect(Selector('img[src*="gitHub.svg"]').exists).ok();

  
  await t.expect(Selector('small').withText('© 23/10/2023 Los pibes - I27').exists).ok();
});
