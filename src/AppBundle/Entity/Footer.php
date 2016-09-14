<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Footer
 *
 * @ORM\Table(name="footer")
 */
class Footer
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="footer", type="text")
	 *
	 * @Assert\NotBlank()
     */
    private $footer;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }


    /**
     * Set footer
     *
     * @param string $footer
     * @return Footer
     */
    public function setFooter($footer)
    {
        $this->footer = $footer;

        return $this;
    }

    /**
     * Get footer
     *
     * @return string 
     */
    public function getFooter()
    {
        return $this->footer;
    }
	
}