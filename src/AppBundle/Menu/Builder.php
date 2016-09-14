<?php

namespace AppBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;

class Builder implements ContainerAwareInterface
{
    use ContainerAwareTrait;

    public function mainMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');

        $menu->addChild('Kalkulator', array('route' => 'homepage'));

        
        $em = $this->container->get('doctrine')->getManager();
		
        $pages = $em->getRepository('AppBundle:page')->findAll();
		
		foreach ($pages as $page) {
			
			$pageSlug = $page->getSlug();
			
			if (!empty($pageSlug)) {
				$menu->addChild($page->getName(), array(
					'route' => 'page',
					'routeParameters' => array('slug' => $pageSlug)
				));
			}
		}

        return $menu;
    }
}