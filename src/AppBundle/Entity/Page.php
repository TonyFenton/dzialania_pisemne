<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Page
 *
 * @ORM\Table(name="page")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PageRepository")
 */
class Page
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
     * @ORM\Column(name="slug", type="string", length=255)
     */
    private $slug;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255)
     */
    private $title;

    /**
     * @var int
     *
     * @ORM\Column(name="sequence", type="integer")
     */
    private $sequence;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text")
     */
    private $content;
	
	 /**
     * @var int
     *
	 * @ORM\ManyToOne(targetEntity="Footer")
	 * @ORM\JoinColumn(name="footer_id", referencedColumnName="id", onDelete="SET NULL")
     */
    private $footer;

	/**
     * @ORM\OneToOne(targetEntity="Description", mappedBy="page", cascade={"remove", "persist"}))
     */
    private $description;

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
     * Set slug
     *
     * @param string $slug
     * @return Page
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Get slug
     *
     * @return string 
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Page
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set title
     *
     * @param string $title
     * @return Page
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string 
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set sequence
     *
     * @param integer $sequence
     * @return Page
     */
    public function setSequence($sequence)
    {
        $this->sequence = $sequence;

        return $this;
    }

    /**
     * Get sequence
     *
     * @return integer 
     */
    public function getSequence()
    {
        return $this->sequence;
    }

    /**
     * Set content
     *
     * @param string $content
     * @return Page
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string 
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set footer
     *
     * @param \AppBundle\Entity\Footer $footer
     * @return Page
     */
    public function setFooter(\AppBundle\Entity\Footer $footer = null)
    {
        $this->footer = $footer;

        return $this;
    }

    /**
     * Get footer
     *
     * @return \AppBundle\Entity\Footer 
     */
    public function getFooter()
    {
        return $this->footer;
    }

    /**
     * Set description
     *
     * @param \AppBundle\Entity\Description $description
     * @return Page
     */
    public function setDescription(\AppBundle\Entity\Description $description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return \AppBundle\Entity\Description 
     */
    public function getDescription()
    {
        return $this->description;
    }
}
