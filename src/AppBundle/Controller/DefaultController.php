<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Page;

class DefaultController extends Controller
{
	/**
     * @Route("/", name="homepage")
     */
    public function homepageAction()
    {
		$page = $this->getDoctrine()
			->getRepository('AppBundle:Page')
			->findOneBySlug('');
		
        return $this->render('default/homepage.html.twig', array(
            "page" => $page,
        ));
    }
	
    /**
     * @Route("/{slug}", name="page")
     */
    public function pageAction(Page $page)
    {
        return $this->render('default/page.html.twig', array(
            "page" => $page,
        ));
    }
}
