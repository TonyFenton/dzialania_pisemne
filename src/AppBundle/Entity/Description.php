<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Description
 *
 * @ORM\Table(name="description")
 */
class Description
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
     * @ORM\Column(name="description", type="string", length=500)
	 * @Assert\NotBlank()
	 * @Assert\Length(max = 500)
     */
    private $description;


	/**
     * @ORM\OneToOne(targetEntity="Page", inversedBy="description")
     * @ORM\JoinColumn(name="page_id", referencedColumnName="id")
     */
    private $page;
	
   
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
     * Set description
     *
     * @param string $description
     * @return Description
     */
    public function setDescription($description)
    {
        $this->description = trim($description);

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set page
     *
     * @param \AppBundle\Entity\Page $page
     * @return Description
     */
    public function setPage(\AppBundle\Entity\Page $page = null)
    {
        $this->page = $page;

        return $this;
    }

    /**
     * Get page
     *
     * @return \AppBundle\Entity\Page 
     */
    public function getPage()
    {
        return $this->page;
    }
	
	public function __toString()
	{
		return $this->getDescription();
	}
}